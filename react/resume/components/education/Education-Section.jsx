import { useState } from "react";
import EduForm from "./Education-Form";
import EducationList from "./Education-List";
import styles from "../../styles/education/Education-Section.module.css";
import school from "../../assets/school.svg";

function EducationSection({ educationDetails, setEducationDetails }) {
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
          <img src={school} alt="school" width="30px" />
          <div>Education</div>
        </div>

        <div className={drop ? styles.rotateUp : styles.rotateDown}>
          &#9660;
        </div>
      </section>

      {drop && !formID && (
        <EducationList
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          formID={formID}
          setFormID={setFormID}
          drop={drop}
        />
      )}

      {formID > 0 && (
        <EduForm
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
          formID={formID}
          setFormID={setFormID}
        />
      )}
    </div>
  );
}

export default EducationSection;
