import styles from "../css/Loading.module.css";
import { BeatLoader } from "react-spinners";

export function Loading() {
  return (
    <div className={styles.wrapper}>
      <div>
        <BeatLoader size={20} margin={6} color="#403eb6" />
      </div>
    </div>
  );
}
