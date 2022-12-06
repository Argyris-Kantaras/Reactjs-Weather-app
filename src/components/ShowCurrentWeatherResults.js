import styles from "../css modules/ShowWeatherResults.module.css";
import LocationDetails from "./LocationDetails";
import PrimaryDetails from "./PrimaryDetails";
import getWeatherResults from "../handlers/getWeatherResults";
import { useContext, useEffect, useRef, useState } from "react";
import LocaleContext from "../hooks/locale-context";
import Card from "./Card";
import rainImage from "../icons/rain.jpg";
import sunnyImg from "../icons/sunny.jpeg";
import cloudyImg from "../icons/cloudy.jpeg";
import snowImg from "../icons/snow.jpg";

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

  useEffect(() => {
    if (resultsReceived) {
      if (currentWeather.text.toLowerCase().includes("rain"))
        backgroundRef.current.style.backgroundImage = `url(${rainImage})`;
      if (currentWeather.text.toLowerCase().includes("drizzle"))
        backgroundRef.current.style.backgroundImage = `url(${rainImage})`;
      if (currentWeather.text.toLowerCase().includes("cloud"))
        backgroundRef.current.style.backgroundImage = `url(${cloudyImg})`;
      if (currentWeather.text.toLowerCase().includes("overcast"))
        backgroundRef.current.style.backgroundImage = `url(${cloudyImg})`;
      if (currentWeather.text.toLowerCase().includes("sun"))
        backgroundRef.current.style.backgroundImage = `url(${sunnyImg})`;
      if (currentWeather.text.toLowerCase().includes("clear"))
        backgroundRef.current.style.backgroundImage = `url(${sunnyImg})`;
      if (currentWeather.text.toLowerCase().includes("snow"))
        backgroundRef.current.style.backgroundImage = `url(${snowImg})`;
    }
  }, [resultsReceived]);

  return (
    <div ref={backgroundRef} className={styles.resultsContainer}>
      <div className={styles.allDetails}>
        <Card>
          <LocationDetails data={currentWeather} />
          <PrimaryDetails data={currentWeather} />
        </Card>
      </div>
    </div>
  );
}

export default ShowCurrentWeatherResults;
