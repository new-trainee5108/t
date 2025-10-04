import styles from "../../styles/education/Education-List.module.css";
import { Form } from "react-router";

function ListItems({ item, formID, setFormID }) {
  function formToggle() {
    if (formID === item.exp_id) setFormID(0);
    else setFormID(item.exp_id);
  }

  return (
    <section onClick={formToggle} className={styles.list}>
      <div className={styles.listItem}>{item.title}</div>
    </section>
  );
}

function ExperienceList({
  experienceDetails,
  setExperienceDetails,
  formID,
  setFormID,
}) {
  function newList() {
    setExperienceDetails([
      ...experienceDetails,
      {
        exp_id: 99,
        company: "",
        title: "untitled",
        dateStart: "",
        dateEnd: "",
        location: "",
        description: "",
      },
    ]);
    setFormID(99);
  }

  return (
    <>
      {experienceDetails.map((item) => (
        <ListItems
          item={item}
          key={item.exp_id}
          formID={formID}
          setFormID={setFormID}
        />
      ))}
      <section className={styles.addButton}>
        <button form="formExpPOST">+ Experience</button>
      </section>

      <Form method="POST" id="formExpPOST" onSubmit={newList} hidden readOnly>
        <input type="text" name="resume" value="experience" hidden readOnly />
      </Form>
    </>
  );
}

export default ExperienceList;
