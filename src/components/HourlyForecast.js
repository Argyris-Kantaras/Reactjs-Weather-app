import styles from "../css modules/HourlyForecast.module.css";
import DirectionArrow from "../components/DirectionArrow";
import { useRef } from "react";

function HourlyForecast(props) {
  return (
    <div className={styles.hourlyContainer}>
      <div
        ref={props.closeBtn}
        onClick={(e) => {
          props.closeBtn.current.style.display = "none";
          props.refs.current[0].style.display = "none";
          props.refs.current[1].style.display = "none";
          props.refs.current[2].style.display = "none";
        }}
        className={styles.xBtn}
      >
        X
      </div>
      {props.results.map((result, i) => {
        return (
          <div
            ref={(el) => {
              props.refs.current[i] = el;
            }}
            key={i}
            className={styles.everyDay}
          >
            {result.map((hour) => {
              return (
                <div key={hour.date} className={styles.everyHour}>
                  <p>{hour.time}</p>
                  <h4>{hour.text}</h4>
                  <div>
                    <img src={hour.icon} />
                  </div>
                  <label>Temperature</label>
                  <div>{hour.tempC}C</div>
                  <label>Wind</label>
                  <span>
                    <DirectionArrow wind={hour.windDir} />
                  </span>
                  <div>{hour.windKph}kph</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default HourlyForecast;
