import styles from "../../styles/education/Education-Form.module.css";
import del from "../../assets/delete.svg";
import { Form, useActionData, useSubmit } from "react-router";
import { useRef } from "react";

function ExpForm({
  experienceDetails,
  setExperienceDetails,
  formID,
  setFormID,
}) {
  const actionData = useActionData();
  const submit = useSubmit();

  const SelectedList = experienceDetails.find((item) => item.exp_id === formID);
  const copyList = useRef(SelectedList);
  const refPUT = useRef(null);
  const refDELETE = useRef(null);

  function handleChange(e) {
    setExperienceDetails(
      experienceDetails.map((item) => {
        if (item.exp_id === formID) {
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
    if (SelectedList.exp_id === 99) {
      refPUT.current.value = actionData.exp_id;
      SelectedList.exp_id = actionData.exp_id;
    }
    setExperienceDetails(
      experienceDetails.filter((item) => {
        if (item.exp_id !== formID) {
          return item;
        }
      }),
    );
    setFormID(0);
    submit(e.currentTarget, { method: "DELETE" });
  }

  function handleCancel() {
    if (SelectedList.exp_id === 99) SelectedList.exp_id = actionData.exp_id;
    setExperienceDetails(
      experienceDetails.map((item) => {
        if (item.exp_id === formID) {
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
    if (SelectedList.exp_id === 99) {
      refPUT.current.value = actionData.exp_id;
      SelectedList.exp_id = actionData.exp_id;
    }
    setExperienceDetails(
      experienceDetails.map((item) => {
        if (item.exp_id === formID) {
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
        id="formExpPUT"
        onSubmit={handleSave}
      >
        <section>
          <label htmlFor="company">Company Name</label>
          <input
            value={SelectedList.company}
            name="company"
            id="company"
            placeholder="Enter Company Name"
            onChange={handleChange}
          />
        </section>

        <section>
          <label htmlFor="title">Title</label>
          <input
            value={SelectedList.title}
            name="title"
            id="title"
            placeholder="Enter Title"
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

        <section>
          <label htmlFor="description">Description</label>
          <textarea
            value={SelectedList.description}
            name="description"
            id="description"
            placeholder="Enter Description here"
            onChange={handleChange}
            rows={3}
          />
        </section>

        <input
          ref={refPUT}
          type="number"
          name="id"
          value={SelectedList.exp_id}
          hidden
          readOnly
        />
        <input type="text" name="resume" value="experience" hidden readOnly />
      </Form>

      <Form
        method="DELETE"
        id="formExpDELETE"
        onSubmit={handleDelete}
        hidden
        readOnly
      >
        <input
          ref={refDELETE}
          type="number"
          name="id"
          value={SelectedList.exp_id}
          hidden
          readOnly
        />
        <input type="text" name="type" value="delete" hidden readOnly />
        <input type="text" name="resume" value="experience" hidden readOnly />
      </Form>

      <section className={styles.control}>
        <button className={styles.button} form="formExpDELETE">
          <img src={del} alt="" width="18px" />
          Delete
        </button>
        <button className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
        <button className={styles.button} form="formExpPUT">
          Save
        </button>
      </section>
    </section>
  );
}

export default ExpForm;
