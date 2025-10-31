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
