import styles from "../../styles/display/Display-Education.module.css";

function Display({ item }) {
  return (
    <div className={styles.displayEducation}>
      <section>
        {item.dateStart &&
          item.dateStart + (item.dateStart && " - " + item.dateEnd)}
      </section>
      <section>{item.degree}</section>
      <section>{item.location}</section>
      <section>{item.school}</section>
    </div>
  );
}

function DisplayEducation({ educationDetails }) {
  return (
    <div className={styles.display}>
      <div>Education</div>

      {educationDetails.map((item) => (
        <Display item={item} key={item.edu_id} />
      ))}
    </div>
  );
}
export default DisplayEducation;
