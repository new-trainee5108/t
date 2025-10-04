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
