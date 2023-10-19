import styles from "./PrimaryDetails.module.css";
import SearchBar from "../Search bar/SearchBar";
import UVMeasure from "../UV measure/UVMeasure";
import MeasureDots from "../measure colors/MeasureDots";

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
  const data = props.data;
  return (
    <div className={styles.primaryContainer}>
      <div className={styles.dayTime}>
        <span className={styles.today}>{weekDays[day.getUTCDay()] + " "} </span>
        <span className={styles.currTime}>
          {data.location ? data.location.localTime.slice(-5) : ""}
        </span>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar data={data} setState={props.setLocation} />
      </div>
      <div className={styles.tempInfo}>
        <span className={styles.currentTemperature}>{data.tempC}</span>
        <span className={styles.degrees}>&deg;C</span>
      </div>
      <div className={styles.windSection}>
        <div>
          <span>Wind: </span>
          <span>{data.windDir} </span>
          <span style={{ fontSize: "25px", color: "rgba(255, 255, 255, 0.5)" }}>
            {data.windKph}{" "}
          </span>
          <span>Kph</span>
        </div>
      </div>
      <MeasureDots />
      <UVMeasure data={data} />
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
    </div>
  );
}

export default PrimaryDetails;
