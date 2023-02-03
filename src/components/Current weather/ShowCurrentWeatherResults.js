import styles from "./ShowWeatherResults.module.css";
import PrimaryDetails from "../Primary details/PrimaryDetails";
import getWeatherResults from "../../handlers/getWeatherResults";
import { useContext, useEffect, useRef, useState } from "react";
import LocaleContext from "../../hooks/locale-context";
import Show3DaysForecast from "../Forecasts/Show3DaysForecast";

function ShowCurrentWeatherResults(props) {
  const locale = useContext(LocaleContext);
  const [currentWeather, setCurrentWeather] = useState({});
  const [resultsReceived, setResultsReceived] = useState(false);
  const backgroundRef = useRef();

  useEffect(() => {
    if (locale.location !== "") {
      getWeatherResults(locale.location, setCurrentWeather, setResultsReceived);
    }
  }, [locale]);

  return (
    <div ref={backgroundRef} className={styles.resultsContainer}>
      <div className={styles.allDetails}>
        <PrimaryDetails setLocation={props.setLocation} data={currentWeather} />
        <Show3DaysForecast />
      </div>
    </div>
  );
}

export default ShowCurrentWeatherResults;
