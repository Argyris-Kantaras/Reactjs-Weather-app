import { useEffect, useState } from "react";
import styles from "./PickIcon.module.css";
import rain from "../../icons/rain-icon.png";
import lightRain from "../../icons/light-rain.png";
import snow from "../../icons/snow.png";
import lightSnow from "../../icons/light-snow.png";
import sun from "../../icons/sun.png";
import overcast from "../../icons/overcast.png";
import cloudy from "../../icons/cloudy-icon.png";
import nightCloud from "../../icons/cloudy-night.png";
import clearNight from "../../icons/clear-night.png";
import sleet from "../../icons/sleet.png";
import thunderImg from "../../icons/thunder.png";

function PickIcon(props) {
  const [currentIcon, setCurrentIcon] = useState();
  useEffect(() => {
    if (props.text ? props.text.toLowerCase().includes("thunder") : null)
      setCurrentIcon(thunderImg);
    if (props.text ? props.text.toLowerCase().includes("rain") : null)
      setCurrentIcon(rain);
    if (props.text ? props.text.toLowerCase().includes("drizzle") : null)
      setCurrentIcon(lightRain);
    if (props.text ? props.text.toLowerCase().includes("cloud") : null)
      props.isDay === 1 ? setCurrentIcon(cloudy) : setCurrentIcon(nightCloud);
    if (props.text ? props.text.toLowerCase().includes("overcast") : null)
      setCurrentIcon(overcast);
    if (props.text ? props.text.toLowerCase().includes("sun") : null)
      props.isDay === 1 ? setCurrentIcon(sun) : setCurrentIcon(clearNight);
    if (props.text ? props.text.toLowerCase().includes("clear") : null)
      props.isDay === 1 ? setCurrentIcon(sun) : setCurrentIcon(clearNight);
    if (props.text ? props.text.toLowerCase().includes("snow") : null)
      setCurrentIcon(snow);
    if (props.text ? props.text.toLowerCase().includes("sleet") : null)
      setCurrentIcon(sleet);
  }, [props]);
  return (
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={currentIcon} />
    </div>
  );
}

export default PickIcon;
