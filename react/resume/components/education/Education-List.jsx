import styles from "../../styles/education/Education-List.module.css";
import { Form } from "react-router";

function ListItems({ item, formID, setFormID }) {
  function formToggle() {
    if (formID === item.edu_id) setFormID(0);
    else setFormID(item.edu_id);
  }

  return (
    <section onClick={formToggle} className={styles.list}>
      <div className={styles.listItem}>{item.degree}</div>
    </section>
  );
}

function EducationList({
  educationDetails,
  setEducationDetails,
  formID,
  setFormID,
}) {
  function newList() {
    setEducationDetails([
      ...educationDetails,
      {
        edu_id: 99,
        school: "",
        degree: "untitled",
        dateStart: "",
        dateEnd: "",
        location: "",
      },
    ]);
    setFormID(99);
  }

  return (
    <>
      {educationDetails.map((item) => (
        <ListItems
          item={item}
          key={item.edu_id}
          formID={formID}
          setFormID={setFormID}
        />
      ))}
      <section className={styles.addButton}>
        <button form="formEduPOST">+ Education</button>
      </section>

      <Form method="POST" id="formEduPOST" onSubmit={newList} hidden readOnly>
        <input type="text" name="resume" value="education" hidden readOnly />
      </Form>
    </>
  );
}

export default EducationList;
