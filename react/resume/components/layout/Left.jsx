import styles from "../../styles/layout/Left.module.css"

function Left(props) {
  return (
    <div className={styles.left}>
      <div className={styles.columnA}>{props.children[0]}</div>

      <div className={styles.columnB}>
        <div>{props.children[1]}</div>

        <div>{props.children[2]}</div>

        <div>{props.children[3]}</div>

        <div>{props.children[4]}</div>
      </div>
    </div>
  );
}

export default Left;
