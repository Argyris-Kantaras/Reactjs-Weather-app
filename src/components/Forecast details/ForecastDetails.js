import { useRef, useState } from "react";
import styles from "./ForecastDetails.module.css";
import UVMeasure from "../UV measure/UVMeasure";
import hotArrow from "../../icons/hot-arrow.png";
import coldArrow from "../../icons/cold-arrow.png";
const days = ["Today", "Tomorrow"];

function ForecastDetails(props) {
  const data = props.results;
  const day = props.dayToShow;
  if (data[day])
    return (
      <div>
        <h1 className={styles.daysHighlights}>Day's highlights</h1>
        <div className={styles.allDetails}>
          <div className={styles.highlight}>
            <div className={styles.title}>UV Index</div>
            <UVMeasure index={data[day].uv} />
            <span className={styles.UVValue}>{data[day].uv}</span>
          </div>
          <div className={styles.highlightWind}>
            <div className={styles.title}>Wind</div>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{data[day].windKph}</span>
              <span className={styles.sign}>/Kph</span>
            </div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.title}>Daily temperature</div>
            <div className={styles.temperatures}>
              <div className={styles.arrows}>
                <img className={styles.hotArrow} src={hotArrow} />
                <img className={styles.coldArrow} src={coldArrow} />
              </div>
              <div>
                <div className={styles.valueContainer}>
                  <span className={styles.label}>Max:</span>
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
                  <span className={styles.label}>Min:</span>
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

          <div className={styles.humidityHighlight}>
            <div className={styles.title}>Humidity</div>
            <div className={styles.valueContainer}>
              <span className={styles.value}>{data[day].humidity}</span>
              <span className={styles.sign}>%</span>
            </div>
          </div>
          <div className={styles.highlight}>
            <div className={styles.valueContainer}>
              <span className={styles.emoji}>💧</span>
              <span className={styles.label}> Rain:</span>
              <span className={styles.value}>{data[day].rain}</span>
              <span className={styles.sign}>%</span>
            </div>
            <div className={styles.valueContainer}>
              <span className={styles.emoji}>❄️</span>
              <span className={styles.label}> Snow:</span>
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
