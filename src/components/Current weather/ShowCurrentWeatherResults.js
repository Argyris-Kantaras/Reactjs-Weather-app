import styles from "./ShowWeatherResults.module.css";
import PrimaryDetails from "../Primary details/PrimaryDetails";
import getWeatherResults from "../../handlers/getWeatherResults";
import { useContext, useEffect, useRef, useState } from "react";
import LocaleContext from "../../hooks/locale-context";
import Show3DaysForecast from "../Forecasts/Show3DaysForecast";
import rain from "../../icons/rain.jpg";
import clear from "../../icons/sunny.jpg";
import snow from "../../icons/snow.jpg";
import cloudy from "../../icons/cloudy.jpg";
import mist from "../../icons/mist.jpg";

function ShowCurrentWeatherResults(props) {
  const locale = useContext(LocaleContext);
  const [currentWeather, setCurrentWeather] = useState({});
  const [resultsReceived, setResultsReceived] = useState(false);
  const [backgroundImage, setBackgroundImg] = useState("");
  const [changeImg, setChangeImg] = useState(clear);
  const backgroundRef = useRef();

  useEffect(() => {
    if (locale.location !== "") {
      getWeatherResults(locale.location, setCurrentWeather, setResultsReceived);
    }
    if (backgroundImage.toLocaleLowerCase().includes("clear"))
      setChangeImg(clear);
    if (backgroundImage.toLocaleLowerCase().includes("sunny"))
      setChangeImg(clear);
    if (backgroundImage.toLocaleLowerCase().includes("snow"))
      setChangeImg(snow);
    if (backgroundImage.toLocaleLowerCase().includes("cloud"))
      setChangeImg(cloudy);
    if (backgroundImage.toLocaleLowerCase().includes("overcast"))
      setChangeImg(cloudy);
    if (backgroundImage.toLocaleLowerCase().includes("rain"))
      setChangeImg(rain);
    if (backgroundImage.toLocaleLowerCase().includes("rain shower"))
      setChangeImg(rain);
    if (backgroundImage.toLocaleLowerCase().includes("mist"))
      setChangeImg(mist);
  }, [locale, backgroundImage]);

  return (
    <div
      style={{ backgroundImage: `url(${changeImg})` }}
      ref={backgroundRef}
      className={styles.resultsContainer}
    >
      <div className={styles.allDetails}>
        <PrimaryDetails setLocation={props.setLocation} data={currentWeather} />
        <Show3DaysForecast setBackgroundImg={setBackgroundImg} />
      </div>
    </div>
  );
}

export default ShowCurrentWeatherResults;
