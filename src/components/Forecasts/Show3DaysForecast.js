import { useContext, useEffect, useRef, useState } from "react";
import get3DaysForecasts from "../../handlers/get3DaysForecasts";
import LocaleContext from "../../hooks/locale-context";
import ForecastDetails from "../Forecast details/ForecastDetails";
import HourlyForecast from "../Hourly forecasts/HourlyForecast";
import styles from "./Show3DaysForecast.module.css";

function Show3DaysForecast() {
  const locale = useContext(LocaleContext);
  const [data, setData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  const [dayOfForecast, setDayOfForecast] = useState(0);
  const [degree, setDegree] = useState(0);

  const todayRef = useRef();
  const tomorrowRef = useRef();
  const dayAfterRef = useRef();
  const celciusRef = useRef();
  const farenheitRef = useRef();

  useEffect(() => {
    if (locale.location)
      get3DaysForecasts(
        locale.location,
        setData,
        setCurrentLocation,
        setHourlyData
      );
  }, [locale]);
  useEffect(() => {
    if (dayOfForecast === 0) {
      todayRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      todayRef.current.style.color = "white";
      dayAfterRef.current.style = "none";
      tomorrowRef.current.style = "none";
    }
    if (dayOfForecast === 1) {
      tomorrowRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      tomorrowRef.current.style.color = "white";
      todayRef.current.style = "none";
      dayAfterRef.current.style = "none";
    }
    if (dayOfForecast === 2) {
      dayAfterRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      dayAfterRef.current.style.color = "white";
      todayRef.current.style = "none";
      tomorrowRef.current.style = "none";
    }
    if (degree === 0) {
      celciusRef.current.style.backgroundColor = "black";
      celciusRef.current.style.color = "white";
      farenheitRef.current.style = "none";
    } else {
      farenheitRef.current.style.backgroundColor = "black";
      farenheitRef.current.style.color = "white";
      celciusRef.current.style = "none";
    }
  }, [dayOfForecast, degree]);
  return (
    <div className={styles.forecastsContainer}>
      <div className={styles.dayPickBtns}>
        <div>
          <span
            ref={todayRef}
            className={styles.dayPick}
            onClick={() => setDayOfForecast(0)}
          >
            Today
          </span>
          <span
            ref={tomorrowRef}
            className={styles.dayPick}
            onClick={() => setDayOfForecast(1)}
          >
            Tomorrow
          </span>
          <span
            ref={dayAfterRef}
            className={styles.dayPick}
            onClick={() => setDayOfForecast(2)}
          >
            Day after
          </span>
        </div>
        <div className={styles.degreesSigns}>
          <span
            ref={celciusRef}
            onClick={() => setDegree(0)}
            className={styles.degree}
          >
            &deg;C
          </span>
          <span
            ref={farenheitRef}
            onClick={() => setDegree(1)}
            className={styles.degree}
          >
            &deg;F
          </span>
        </div>
      </div>
      <HourlyForecast
        degreesSign={degree}
        results={hourlyData}
        day={dayOfForecast}
      />
      <ForecastDetails
        degreesSign={degree}
        dayToShow={dayOfForecast}
        results={data}
      />
    </div>
  );
}

export default Show3DaysForecast;
