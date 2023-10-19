import styles from "./TextSelector.module.css";
import { useEffect } from "react";

function TextSelector(props) {
  return (
    <div className={styles.dailyGeneralInfo}>
      <div>
        <h3 className={styles.weatherForecasts}>Weather Forecasts</h3>
        <h3 className={styles.text}>
          {props.data[props.dayOfForecast]
            ? props.data[props.dayOfForecast].text
            : ""}
        </h3>
        <div className={styles.date}>
          {props.data[props.dayOfForecast]
            ? props.data[props.dayOfForecast].date
            : ""}
        </div>
      </div>
      <div>
        <div className={styles.temp}>
          {props.data[props.dayOfForecast]
            ? props.degreesSign === 0
              ? props.data[props.dayOfForecast].maxTempC
              : props.data[props.dayOfForecast].maxTempF
            : ""}
          {props.degreesSign === 0 ? <span>&deg;C</span> : <span>&deg;F</span>}
        </div>

        <div className={styles.selectedText}>
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].rain > 20 &&
          props.data[props.dayOfForecast].rain < 50
            ? "Possible rain today in your area! The possibility is " +
              props.data[props.dayOfForecast].rain +
              "%"
            : ""}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].rain > 20 &&
          props.data[props.dayOfForecast].rain > 50 ? (
            <div>
              Get an umbrella if you go out. Expected rain in you area! The
              possibility is {props.data[props.dayOfForecast].rain} %
            </div>
          ) : (
            ""
          )}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].snow > 20 &&
          props.data[props.dayOfForecast].snow < 50
            ? "Light snow is expected to fall. ! The possibility is " +
              props.data[props.dayOfForecast].snow +
              "%"
            : ""}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].snow > 20 &&
          props.data[props.dayOfForecast].snow > 50 ? (
            <div>
              If you must, then drive safe. Snow in expected to fall! The
              possibility is {props.data[props.dayOfForecast].snow} %
            </div>
          ) : (
            ""
          )}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].text.toLowerCase().includes("cloud")
            ? "Cloudy day is expected. Not necessary but keep an umbrella near you"
            : ""}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].text
            .toLowerCase()
            .includes("overcast")
            ? "Cloudy day is expected"
            : ""}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].text.toLowerCase().includes("clear")
            ? "Sunny and clear weather is expected.Get reafy and go for a walk, you'll enjoy it"
            : ""}
          {props.data[props.dayOfForecast] &&
          props.data[props.dayOfForecast].text.toLowerCase().includes("sunny")
            ? "Sunny and clear weather is expected.Get ready and go for a walk, you'll enjoy it"
            : ""}
        </div>
      </div>
    </div>
  );
}

export default TextSelector;
