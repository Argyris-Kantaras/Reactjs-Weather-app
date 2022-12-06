import { useRef } from "react";
import styles from "../css modules/ForecastDetails.module.css";
import Card from "./Card";

const days = ["Today", "Tomorrow"];

function ForecastDetails(props) {
  const forecastRefs = useRef([]);
  const overlayRefs = useRef([]);
  return (
    <div className={styles.allDetails}>
      {props.results.map((forecast, i) => {
        return (
          <Card key={forecast.date}>
            <div
              onMouseOver={() => {
                overlayRefs.current[i].style.display = "block";
              }}
              onMouseLeave={() => {
                overlayRefs.current[i].style.display = "none";
              }}
              ref={(el) => {
                forecastRefs.current[i] = el;
              }}
              className={styles.forecast}
            >
              <div
                onClick={() => {
                  props.showHourlyRefs.current[i].style.display = "flex";
                  props.closeBtn.current.style.display = "block";
                  // if (i === 1)
                  //   props.showHourlyRefs.current[i].style.position = "absolute";
                  // props.showHourlyRefs.current[i].style.top = "100%";
                }}
                ref={(el) => {
                  overlayRefs.current[i] = el;
                }}
                className={styles.overlay}
              >
                <p>Hourly forecast</p>
              </div>
              <span className={styles.day}>{days[i]}</span>
              <h3>{forecast ? forecast.date : "2022-11-18"}</h3>
              <div>{forecast ? forecast.text : ""}</div>
              <img src={forecast.mainIcon} alt="" />
              <div className={styles.innerDetails}>
                <div>
                  <label>Temperature</label>
                  <div>
                    <span>max: </span>
                    {forecast ? +forecast.maxTempC : ""}
                    <span>C</span>
                  </div>
                  <div>
                    {" "}
                    <span>min: </span>
                    {forecast ? +forecast.minTempC : ""}
                    <span>C</span>
                  </div>
                </div>
                <div>
                  <label>Wind</label>
                  <div>
                    {forecast ? forecast.windKph : ""}
                    <span>kph</span>
                  </div>
                </div>
                <div>
                  <label>Humidity</label>
                  <div>
                    {forecast ? forecast.humidity : ""}
                    <span>%</span>
                  </div>
                </div>
                <div>
                  {forecast ? "❄️" + forecast.snow : ""}
                  <span>%</span>
                </div>
                <div>
                  {forecast ? "🌧️" + forecast.rain : ""}
                  <span>%</span>
                </div>
                <div>{forecast ? "🌞" + forecast.uv : ""}</div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default ForecastDetails;
