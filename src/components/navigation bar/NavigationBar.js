import { useEffect, useRef } from "react";
import styles from "./NavigationBar.module.css";

function NavigationBar(props) {
  const todayRef = useRef();
  const tomorrowRef = useRef();
  const dayAfterRef = useRef();
  const celciusRef = useRef();
  const farenheitRef = useRef();

  useEffect(() => {
    if (props.dayOfForecast === 0) {
      todayRef.current.style.color = "orange";
      todayRef.current.style.borderBottom = "1px orange solid";
      dayAfterRef.current.style = "none";
      tomorrowRef.current.style = "none";
    }
    if (props.dayOfForecast === 1) {
      tomorrowRef.current.style.color = "orange";
      tomorrowRef.current.style.borderBottom = "1px orange solid";
      todayRef.current.style = "none";
      dayAfterRef.current.style = "none";
    }
    if (props.dayOfForecast === 2) {
      dayAfterRef.current.style.color = "orange";
      dayAfterRef.current.style.borderBottom = "1px orange solid";
      todayRef.current.style = "none";
      tomorrowRef.current.style = "none";
    }
    if (props.degree === 0) {
      celciusRef.current.style.color = "orange";
      celciusRef.current.style.borderBottom = "1px orange solid";
      farenheitRef.current.style = "none";
    } else {
      farenheitRef.current.style.color = "orange";
      farenheitRef.current.style.borderBottom = "1px orange solid";
      celciusRef.current.style = "none";
    }
  }, [props]);

  return (
    <div className={styles.dayPickBtns}>
      <div>
        <span
          ref={todayRef}
          className={styles.dayPick}
          onClick={() => props.setDayOfForecast(0)}
        >
          Today
        </span>
        <span
          ref={tomorrowRef}
          className={styles.dayPick}
          onClick={() => props.setDayOfForecast(1)}
        >
          Tomorrow
        </span>
        <span
          ref={dayAfterRef}
          className={styles.dayPick}
          onClick={() => props.setDayOfForecast(2)}
        >
          Day after
        </span>
      </div>
      <div className={styles.degreesSigns}>
        <span
          ref={celciusRef}
          onClick={() => props.setDegree(0)}
          className={styles.degree}
        >
          &deg;C
        </span>
        <span
          ref={farenheitRef}
          onClick={() => props.setDegree(1)}
          className={styles.degree}
        >
          &deg;F
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
