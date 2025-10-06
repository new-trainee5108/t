import { useState } from "react";
import { Outlet, useLoaderData } from "react-router";

const baseUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const personalData = await fetch(
    `${baseUrl}/profile/personal/${params.rid}`,
  ).then((data) => data.json());
  const educationData = await fetch(
    `${baseUrl}/resume/education/${params.rid}`,
  ).then((data) => data.json());
  const experienceData = await fetch(
    `${baseUrl}/resume/experience/${params.rid}`,
  ).then((data) => data.json());
  localStorage.setItem("rid", params.rid);
  return { personalData, educationData, experienceData };
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  if (request.method === "POST") {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    const newDocument = await fetch(
      `${baseUrl}/resume/${form.resume}/${params.id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    ).then((data) => data.json());
    if (form.resume === "education") return { edu_id: newDocument.id };
    else return { exp_id: newDocument.id };
  } else if (request.method === "PUT") {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    console.log(form);
    await fetch(`${baseUrl}/resume/${form.resume}/${params.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => data.json());
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    await fetch(`${baseUrl}/resume/${form.resume}/${params.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  }
}

export function App() {
  const LoaderData = useLoaderData();

  const [personalDetails, setPersonalDetails] = useState({
    ...LoaderData.personalData,
  });

  const [educationDetails, setEducationDetails] = useState([
    ...LoaderData.educationData,
  ]);

  const [experienceDetails, setExperienceDetails] = useState([
    ...LoaderData.experienceData,
  ]);

  return (
    <Outlet
      context={{
        personalDetails: personalDetails,
        setPersonalDetails: setPersonalDetails,
        educationDetails: educationDetails,
        setEducationDetails: setEducationDetails,
        experienceDetails: experienceDetails,
        setExperienceDetails: setExperienceDetails,
      }}
    />
  );
}
