import styles from "../styles/Print.module.css";
import { useOutletContext } from "react-router-dom";

export function Print() {
  const context = useOutletContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.personal}>
        <section>{context.personalDetails.name}</section>

        <section>
          <ul>
            <li>{context.personalDetails.name}</li>
            {context.personalDetails.email &&
              context.personalDetails.number && <li>|</li>}
            <li>{context.personalDetails.name}</li>
            {context.personalDetails.email &&
              context.personalDetails.address && <li>|</li>}
            <li>{context.personalDetails.name}</li>
          </ul>
        </section>
      </div>

      <div className={styles.display}>
        <div>Education</div>

        {context.educationDetails.map((item) => {
          <div className={styles.displayEducation}>
            <section>{item.dateStart + " - " + item.dateEnd}</section>
            <section>{item.degree}</section>
            <section>{item.location}</section>
            <section>{item.school}</section>
          </div>;
        })}
      </div>

      <div className={styles.display}>
        <div>Experience</div>

        {context.educationDetails.map((item) => {
          <div className={styles.displayExperience}>
            <section>{item.dateStart + " - " + item.dateEnd}</section>
            <section>{item.title}</section>
            <section>{item.location}</section>
            <section>{item.company}</section>
            <section className={styles.description}>Description:</section>
            <section>{item.description}</section>
          </div>;
        })}
      </div>
    </div>
  );
}
