import { Form } from "react-router";
import styles from "../../css/Protected/ModelContent.module.css";
import { useState } from "react";

export default function ModalContent({ onClose }) {
  const [disable, setDisable] = useState(false);

  function handleChange(e) {
    if (e.currentTarget.value === "") setDisable(true);
    else setDisable(false);
  }

  return (
    <dialog open={true} className={styles.modal}>
      <div>Project Name</div>
      <Form method="POST" id="project" onSubmit={onClose}>
        <input
          type="text"
          name="title"
          defaultValue={"untitled"}
          onChange={handleChange}
          autoFocus
        />
      </Form>
      <section>
        <button onClick={onClose}>Close</button>
        <button form="project" disabled={disable}>
          Save
        </button>
      </section>
    </dialog>
  );
}
