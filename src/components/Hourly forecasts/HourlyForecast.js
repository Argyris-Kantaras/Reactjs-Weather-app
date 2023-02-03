import styles from "./HourlyForecast.module.css";
import DirectionArrow from "../Direction arrow/DirectionArrow";
import { useRef, useState } from "react";
import PickIcon from "../Pick Icon/PickIcon";

function HourlyForecast(props) {
  const [resultsNumber, setResultNumber] = useState(0);
  const singleHourRef = useRef();

  return (
    <div className={styles.hourlyContainer}>
      <div
        onClick={() =>
          resultsNumber > 0 ? setResultNumber(resultsNumber - 1) : null
        }
        className={styles.operateBtn}
      >
        {"<"}
      </div>
      <div className={styles.everyDay}>
        {props.results[props.day]
          ? props.results[props.day].map((hour) => {
              return (
                <div
                  style={{
                    transform:
                      window.innerWidth > 1100
                        ? `translateX(-${707.6 * resultsNumber}%)`
                        : `translateX(-${254.5 * resultsNumber}%)`,
                  }}
                  ref={singleHourRef}
                  key={hour.date}
                  className={styles.everyHour}
                >
                  <p>{hour.time}</p>
                  <div>
                    <PickIcon isDay={hour.isDay} text={hour.text} />
                  </div>
                  <div>
                    <span className={styles.temperature}>
                      {props.degreesSign === 0 ? hour.tempC : hour.tempF}
                    </span>
                    <span style={{ color: "rgba(0,0,0,0.5)" }}>
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
                </div>
              );
            })
          : ""}
      </div>
      <div
        onClick={() =>
          window.innerWidth > 1100
            ? resultsNumber < 5
              ? setResultNumber(resultsNumber + 1)
              : null
            : resultsNumber < 11
            ? setResultNumber(resultsNumber + 1)
            : null
        }
        className={styles.operateBtn}
      >
        {">"}
      </div>
    </div>
  );
}

export default HourlyForecast;
