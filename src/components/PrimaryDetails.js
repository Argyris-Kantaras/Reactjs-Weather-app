import DirectionArrow from "./DirectionArrow";
import styles from "../css modules/PrimaryDetails.module.css";
import tempIcon from "../icons/temp-icon.png";
import speedIcon from "../icons/speed-icon.png";
import gustIcon from "../icons/gust-icon.png";
import uvIcon from "../icons/uv-icon.png";
import humidIcon from "../icons/humidity-icon.png";
import feelLikeIcon from "../icons/feels-like-icon.png";

function PrimaryDetails(props) {
  const data = props.data;
  return (
    <div>
      <div>
        <span>Updated: </span>
        {data.lastUpdate ? data.lastUpdate : ""}
      </div>
      <div className={styles.mainTextIcon}>
        <h2>{data.text}</h2>
        <img src={data.icon} />
      </div>
      <div className={styles.primaryContainer}>
        <div>
          <img src={tempIcon} />
          <span>{data.tempC} C</span>
        </div>
        <div>
          <DirectionArrow wind={data.windDir} />
          <span>{data.windDir}</span>
        </div>
        <div>
          <img src={speedIcon} /> <span>{data.windKph} km/h</span>
        </div>
        <div>
          <img src={gustIcon} />
          <span>{data.gustKph}</span>
        </div>
        <div>
          <img src={uvIcon} />
          <span>{data.uv}</span>
        </div>
        <div>
          <img src={humidIcon} />
          <span>{data.humidity}%</span>
        </div>
        <div className={styles.feelsLike}>
          <img src={feelLikeIcon} />
          <span>{data.feelsLikeC}</span>
        </div>
      </div>
    </div>
  );
}

export default PrimaryDetails;
