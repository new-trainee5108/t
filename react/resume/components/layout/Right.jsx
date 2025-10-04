import styles from "../../styles/layout/Right.module.css"

function Right({ children }) {
  return <div className={styles.right}>{children}</div>;
}

export default Right;
