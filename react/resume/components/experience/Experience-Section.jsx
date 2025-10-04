import { useState } from "react";
import ExpForm from "./Experience-Form";
import ExperienceList from "./Experience-List";
import styles from "../../styles/education/Education-Section.module.css";
import briefcase from "../../assets/briefcase.svg";

function ExperienceSection({ experienceDetails, setExperienceDetails }) {
  const [formID, setFormID] = useState(0);
  const [drop, setDrop] = useState(false);

  function handleDropDown() {
    if (drop == true) {
      setDrop(false);
      setFormID(0);
    } else {
      setDrop(true);
    }
  }

  return (
    <div className={styles.educationSection}>
      <section className={styles.firstSection} onClick={handleDropDown}>
        <div>
          <img src={briefcase} alt="school" width="30px" />
          <div>Experience</div>
        </div>

        <div className={drop ? styles.rotateUp : styles.rotateDown}>
          &#9660;
        </div>
      </section>

      {drop && !formID && (
        <ExperienceList
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          formID={formID}
          setFormID={setFormID}
          drop={drop}
        />
      )}

      {formID > 0 && (
        <ExpForm
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
          formID={formID}
          setFormID={setFormID}
        />
      )}
    </div>
  );
}

export default ExperienceSection;
