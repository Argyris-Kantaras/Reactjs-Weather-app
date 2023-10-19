import DirectionArrow from "../Direction arrow/DirectionArrow";
import styles from "./HourlyForecast.module.css";
import { useRef, useState } from "react";

function HourlyForecast(props) {
  const [resultsNumber, setResultNumber] = useState(0);
  const singleHourRef = useRef();
  return (
    <div className={styles.hourlyContainer}>
      <button
        onClick={() =>
          resultsNumber > 0 ? setResultNumber(resultsNumber - 1) : null
        }
        className={styles.operateBtn}
      >
        {"<"}
      </button>
      <div className={styles.everyDay}>
        <div
          style={{
            transform:
              window.innerWidth > 1100
                ? `translateX(-${100 * resultsNumber}%)`
                : `translateX(-${45 * resultsNumber}%)`,
          }}
          className={styles.slider}
        >
          {props.results[props.day]
            ? props.results[props.day].map((hour) => {
                return (
                  <div
                    ref={singleHourRef}
                    key={hour.date}
                    className={styles.everyHour}
                  >
                    <p className={styles.currentTime}>{hour.time}</p>
                    <div></div>
                    <div>
                      <span className={styles.temperature}>
                        {props.degreesSign === 0 ? hour.tempC : hour.tempF}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>
                        {props.degreesSign === 0 ? (
                          <span>&deg;C</span>
                        ) : (
                          <span>&deg;F</span>
                        )}
                      </span>
                    </div>
                    <span>
                      <DirectionArrow wind={hour.windDir} />
                    </span>
                    <span className={styles.windDir}>{hour.windDir}</span>
                    <div className={styles.windSpeed}>{hour.windKph} kph</div>
                    <img src={hour.icon} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <button
        onClick={() =>
          window.innerWidth > 1100
            ? resultsNumber < 5
              ? setResultNumber(resultsNumber + 1)
              : null
            : resultsNumber < 24
            ? setResultNumber(resultsNumber + 1)
            : null
        }
        className={styles.operateBtn}
      >
        {">"}
      </button>
    </div>
  );
}

export default HourlyForecast;
