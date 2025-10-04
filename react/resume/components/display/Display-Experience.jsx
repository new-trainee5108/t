import styles from "../../styles/display/Display-Education.module.css";

function Display({ item }) {
  return (
    <div className={styles.displayExperience}>
      <section>
        {item.dateStart &&
          item.dateStart + (item.dateStart && " - " + item.dateEnd)}
      </section>
      <section>{item.company}</section>
      <section>{item.location}</section>
      <section>{item.title}</section>
      <section style={{ alignSelf: "flex-start" }}>
        {item.description && "Description:"}
      </section>
      <section className={styles.description}>{item.description}</section>
    </div>
  );
}

function DisplayExperience({ experienceDetails }) {
  return (
    <div className={styles.display}>
      <div>Experience</div>

      {experienceDetails.map((item) => (
        <Display item={item} key={item.exp_id} />
      ))}
    </div>
  );
}
export default DisplayExperience;
