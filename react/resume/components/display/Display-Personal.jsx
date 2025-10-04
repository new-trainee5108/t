import styles from "../../styles/display/Display-Personal.module.css";

function DisplayPersonal({ personalDetails }) {
  return (
    <div className={styles.display_personal}>
      <section>{personalDetails.name}</section>

      <section>
        <ul>
          <li>{personalDetails.email}</li>
          {personalDetails.email && personalDetails.number && <li>|</li>}
          <li>{personalDetails.number}</li>
          {personalDetails.email && personalDetails.address && <li>|</li>}
          <li>{personalDetails.address}</li>
        </ul>
      </section>
    </div>
  );
}

export default DisplayPersonal;
