import { useEffect, useRef } from "react";
import styles from "./UVMeasure.module.css";

function UVMeasure(props) {
  const measureRef = useRef();
  useEffect(() => {
    if (props.index > 0 && props.index <= 4)
      measureRef.current.style.transform = `rotate(-${
        40 - props.index * 10
      }deg)`;
    if (props.index === 5)
      measureRef.current.style.transform = `rotate(${
        props.index * 10 - 40
      }deg)`;
    if (props.index > 5)
      measureRef.current.style.transform = `rotate(${props.index * 10}deg)`;
  }, [props]);
  return (
    <div>
      <div className={styles.base}>
        <div className={styles.numbers}>
          <span></span>
          <span className={styles.centralNumber}>5</span>
          <span>10</span>
        </div>
        <div ref={measureRef} className={styles.measure}></div>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}

export default UVMeasure;
