import styles from "../../styles/education/Education-Form.module.css";
import del from "../../assets/delete.svg";
import { Form, useActionData, useSubmit } from "react-router";
import { useRef } from "react";

function EduForm({ educationDetails, setEducationDetails, formID, setFormID }) {
  const actionData = useActionData();
  const submit = useSubmit();

  const SelectedList = educationDetails.find((item) => item.edu_id === formID);
  const copyList = useRef(SelectedList);
  const refPUT = useRef(null);
  const refDELETE = useRef(null);

  function handleChange(e) {
    setEducationDetails(
      educationDetails.map((item) => {
        if (item.edu_id === formID) {
          return {
            ...SelectedList,
            [e.target.name]: e.target.value,
          };
        } else {
          return item;
        }
      }),
    );
  }

  function handleDelete(e) {
    e.preventDefault();
    if (SelectedList.edu_id === 99) {
      refPUT.current.value = actionData.edu_id;
      SelectedList.edu_id = actionData.edu_id;
    }
    setEducationDetails(
      educationDetails.filter((item) => {
        if (item.edu_id !== formID) {
          return item;
        }
      }),
    );
    setFormID(0);
    submit(e.currentTarget, { method: "DELETE" });
  }

  function handleCancel() {
    if (SelectedList.edu_id === 99) SelectedList.edu_id = actionData.edu_id;
    setEducationDetails(
      educationDetails.map((item) => {
        if (item.edu_id === formID) {
          return {
            ...copyList.current,
          };
        } else {
          return item;
        }
      }),
    );
    setFormID(0);
  }

  function handleSave(e) {
    e.preventDefault();
    if (SelectedList.edu_id === 99) {
      refPUT.current.value = actionData.edu_id;
      SelectedList.edu_id = actionData.edu_id;
    }
    setEducationDetails(
      educationDetails.map((item) => {
        if (item.edu_id === formID) {
          return {
            ...SelectedList,
          };
        } else {
          return item;
        }
      }),
    );
    setFormID(0);
    submit(e.currentTarget, { method: "PUT" });
  }

  return (
    <section className={styles.form}>
      <Form
        method="PUT"
        className={styles.educationForm}
        id="formEduPUT"
        onSubmit={handleSave}
      >
        <section>
          <label htmlFor="school">School</label>
          <input
            value={SelectedList.school}
            name="school"
            id="school"
            placeholder="Enter School / University"
            onChange={handleChange}
          />
        </section>

        <section>
          <label htmlFor="degree">Degree</label>
          <input
            value={SelectedList.degree}
            name="degree"
            id="degree"
            placeholder="Enter Degree / Field of Study"
            onChange={handleChange}
          />
        </section>

        <section className={styles.date}>
          <section>
            <label htmlFor="start">Start Date</label>
            <input
              value={SelectedList.dateStart}
              name="dateStart"
              id="start"
              placeholder="Enter Start Date"
              onChange={handleChange}
            />
          </section>

          <section>
            <label htmlFor="end">End Date</label>
            <input
              value={SelectedList.dateEnd}
              name="dateEnd"
              id="end"
              placeholder="Enter End Date"
              onChange={handleChange}
            />
          </section>
        </section>

        <section>
          <label htmlFor="location">Location</label>
          <input
            value={SelectedList.location}
            name="location"
            id="location"
            placeholder="Enter Location"
            onChange={handleChange}
          />
        </section>

        <input
          ref={refPUT}
          type="number"
          name="id"
          value={SelectedList.edu_id}
          hidden
          readOnly
        />
        <input type="text" name="resume" value="education" hidden readOnly />
      </Form>

      <Form
        method="DELETE"
        id="formEduDELETE"
        onSubmit={handleDelete}
        hidden
        readOnly
      >
        <input
          ref={refDELETE}
          type="number"
          name="id"
          value={SelectedList.edu_id}
          hidden
          readOnly
        />
        <input type="text" name="type" value="delete" hidden readOnly />
        <input type="text" name="resume" value="education" hidden readOnly />
      </Form>

      <section className={styles.control}>
        <button className={styles.button} form="formEduDELETE">
          <img src={del} alt="" width="18px" />
          Delete
        </button>
        <button className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
        <button className={styles.button} form="formEduPUT">
          Save
        </button>
      </section>
    </section>
  );
}

export default EduForm;
