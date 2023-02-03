import DirectionArrow from "../Direction arrow/DirectionArrow";
import styles from "./PrimaryDetails.module.css";
import rain from "../../icons/rain-icon.png";
import lightRain from "../../icons/light-rain.png";
import snow from "../../icons/snow.png";
import sun from "../../icons/sun.png";
import overcast from "../../icons/overcast.png";
import cloudy from "../../icons/cloudy-icon.png";
import sleet from "../../icons/sleet.png";
import nightCloud from "../../icons/cloudy-night.png";
import clearNight from "../../icons/clear-night.png";
import { useEffect, useState } from "react";
import SearchBar from "../Search bar/SearchBar";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const day = new Date();

function PrimaryDetails(props) {
  const [currentIcon, setCurrentIcon] = useState();
  const data = props.data;
  useEffect(() => {
    if (data.text ? data.text.toLowerCase().includes("rain") : null)
      setCurrentIcon(rain);
    if (data.text ? data.text.toLowerCase().includes("drizzle") : null)
      setCurrentIcon(lightRain);
    if (data.text ? data.text.toLowerCase().includes("cloud") : null)
      data.isDay === 1 ? setCurrentIcon(cloudy) : setCurrentIcon(nightCloud);
    if (data.text ? data.text.toLowerCase().includes("overcast") : null)
      setCurrentIcon(overcast);
    if (data.text ? data.text.toLowerCase().includes("sun") : null)
      props.isDay === 1 ? setCurrentIcon(sun) : setCurrentIcon(clearNight);
    if (data.text ? data.text.toLowerCase().includes("clear") : null)
      props.isDay === 1 ? setCurrentIcon(sun) : setCurrentIcon(clearNight);
    if (data.text ? data.text.toLowerCase().includes("snow") : null)
      setCurrentIcon(snow);
    if (data.text ? data.text.toLowerCase().includes("sleet") : null)
      setCurrentIcon(sleet);
  }, [props]);
  return (
    <div className={styles.primaryContainer}>
      <SearchBar setState={props.setLocation} />
      <img className={styles.mainIcon} src={currentIcon} />
      <div className={styles.tempInfo}>
        <span className={styles.currentTemperature}>{data.tempC}</span>
        <span className={styles.degrees}>&deg;C</span>
      </div>
      <div className={styles.dayTime}>
        <span className={styles.today}>{weekDays[day.getUTCDay()]},</span>
        <span className={styles.currTime}>
          {data.location ? data.location.localTime.slice(-5) : ""}
        </span>
      </div>
      <div className={styles.divider}></div>
      <div>
        <div className={styles.currText}>
          <img className={styles.dataIcon} src={data.icon} />
          <span className={styles.text}>{data.text}</span>
        </div>

        <div>
          <span className={styles.feelsLike}>Feels-like, </span>
          <span className={styles.feelsLikeTemp}>{data.feelsLikeC}</span>
          <span className={styles.feelsLikeDeg}>&deg;C</span>
        </div>
      </div>
      <div className={styles.location}>
        <h3>{data.location ? data.location.name : ""}</h3>
        <p>{data.location ? data.location.country : ""}</p>
      </div>
    </div>
  );
}

export default PrimaryDetails;
