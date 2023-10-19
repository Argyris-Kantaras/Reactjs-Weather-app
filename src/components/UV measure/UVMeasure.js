import { useEffect, useRef } from "react";
import styles from "./UVMeasure.module.css";

function UVMeasure(props) {
  const pickDotColorHandler = () => {
    if (props.data) {
      if (props.data.uv < 3) return { backgroundColor: "yellow" };
      if (props.data.uv > 3 && props.data.uv < 5)
        return { backgroundColor: "rgb(224, 209, 0)" };
      if (props.data.uv >= 5 && props.data.uv < 7)
        return { backgroundColor: "orange" };
      if (props.data.uv >= 7 && props.data.uv < 9)
        return { backgroundColor: "rgb(254, 88, 27)" };
      if (props.data.uv > 9) return { backgroundColor: "red" };
    }
  };
  return (
    <div>
      <div className={styles.uvContainer}>
        <div style={pickDotColorHandler()} className={styles.dot}></div>
        <div>{props.data.uv}</div>
      </div>
      <div className={styles.uvText}>
        {props.data.uv < 6 ? (
          <span>It is safe to go outside and enjoy the sun</span>
        ) : (
          <span>Be careful, very high UV radiation</span>
        )}
      </div>
    </div>
  );
}

export default UVMeasure;
