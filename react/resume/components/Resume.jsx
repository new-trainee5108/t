import styles from "../styles/Resume.module.css"
import Left from "./layout/Left"
import Right from "./layout/Right"
import LeftSidebar from "./sidebar/LeftSidebar"
import TopSidebar from "./sidebar/TopSidebar"
import DisplayPersonal from "./display/Display-Personal";
import SectionPersonal from "./personal/Section-Personal";
import EducationSection from "./education/Education-Section";
import ExperienceSection from "./experience/Experience-Section";
import DisplayEducation from "./display/Display-Education";
import DisplayExperience from "./display/Display-Experience";
import { useOutletContext } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  console.log(request, params)
  if (request.method === "POST") {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    const newDocument = await fetch(
      `${baseUrl}/resume/${form.resume}/${params.rid}/`,
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
    await fetch(`${baseUrl}/resume/${form.resume}/${params.rid}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((data) => data.json());
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    await fetch(`${baseUrl}/resume/${form.resume}/${params.rid}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  }
}

export function Resume() {
  const context = useOutletContext();

  return (
    <div className={styles.root}>
      <Left>
        <LeftSidebar />

        <TopSidebar
          setPersonalDetails={context.setPersonalDetails}
          educationDetails={context.educationDetails}
          setEducationDetails={context.setEducationDetails}
          experienceDetails={context.experienceDetails}
          setExperienceDetails={context.setExperienceDetails}
        />

        <SectionPersonal
          personalDetails={context.personalDetails}
          setPersonalDetails={context.setPersonalDetails}
        />

        <EducationSection
          educationDetails={context.educationDetails}
          setEducationDetails={context.setEducationDetails}
        />

        <ExperienceSection
          experienceDetails={context.experienceDetails}
          setExperienceDetails={context.setExperienceDetails}
        />
      </Left>

      <Right>
        <DisplayPersonal personalDetails={context.personalDetails} />

        <DisplayEducation educationDetails={context.educationDetails} />

        <DisplayExperience experienceDetails={context.experienceDetails} />
      </Right>
    </div>
  );
}
