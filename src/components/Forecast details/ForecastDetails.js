import styles from "./ForecastDetails.module.css";
import UVMeasure from "../UV measure/UVMeasure";
import wind from "../../icons/wind-white.png";
import humidity from "../../icons/humidity-white.png";
import rain from "../../icons/rain-white.png";
import snow from "../../icons/snow-white.png";
const days = ["Today", "Tomorrow"];

function ForecastDetails(props) {
  const data = props.results;
  const day = props.dayToShow;
  if (data[day])
    return (
      <div className={styles.averageStats}>
        <h1 className={styles.daysHighlights}>Average stats</h1>
        <div className={styles.allDetails}>
          {/* <div className={styles.highlight}>
            <div className={styles.title}>UV Index</div>
            <UVMeasure index={data[day].uv} />
            <span className={styles.UVValue}>{data[day].uv}</span>
          </div> */}
          <div className={styles.highlight}>
            <div className={styles.valueContainer}>
              <span>
                <img style={{ width: "70px" }} src={wind} />
              </span>
              <span className={styles.value}>{data[day].windKph}</span>
              <span className={styles.sign}> Kph</span>
            </div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.temperatures}>
              <div>
                <div className={styles.valueContainer}>
                  <span className={styles.label}>High </span>
                  <span className={styles.value}>
                    {props.degreesSign === 0
                      ? data[day].maxTempC
                      : data[day].maxTempF}
                  </span>
                  <span className={styles.sign}>
                    {props.degreesSign === 0 ? (
                      <span>&deg;C</span>
                    ) : (
                      <span>&deg;F</span>
                    )}
                  </span>
                </div>
                <div className={styles.valueContainer}>
                  <span className={styles.label}>Low </span>
                  <span className={styles.value}>
                    {props.degreesSign === 0
                      ? data[day].minTempC
                      : data[day].minTempF}
                  </span>
                  <span className={styles.sign}>
                    {props.degreesSign === 0 ? (
                      <span>&deg;C</span>
                    ) : (
                      <span>&deg;F</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.highlight}>
            <div className={styles.valueContainer}>
              <span>
                <img style={{ width: "50px" }} src={humidity} />
              </span>
              <span className={styles.value}>{data[day].humidity}</span>
              <span className={styles.sign}>%</span>
            </div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.valueContainer}>
              <span>
                <img style={{ width: "40px" }} src={rain} />
              </span>{" "}
              <span className={styles.value}>{data[day].rain}</span>
              <span className={styles.sign}>%</span>
            </div>
            <div className={styles.valueContainer}>
              <span>
                <img style={{ width: "50px" }} src={snow} />
              </span>{" "}
              <span className={styles.value}>{data[day].snow}</span>
              <span className={styles.sign}>%</span>
            </div>
          </div>
        </div>
      </div>
    );
  return null;
}

export default ForecastDetails;
