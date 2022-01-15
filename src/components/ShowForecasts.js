import { useEffect, useRef, useState } from "react";
import { state } from "../pages/Homepage";
import Spinner from "./Spinner";
import classes from "./showForecasts.module.css";

let allDays = [];

const getForecastData = function (data) {
  const forecastsObj = {
    date: data.date,
    humidity: data.day.avghumidity,
    icon: data.day.condition.icon,
    text: data.day.condition.text,
    willRain: data.day.daily_will_it_rain,
    willSnoe: data.day.daily_will_it_snow,
    maxTemp: data.day.maxtemp_c,
    maxWindSpeed: data.day.maxwind_kph,
    minTemp: data.day.mintemp_c,
  };
  return state.forecasts.push(forecastsObj);
};

const getHourlyForecasts = function (data) {
  data.forEach((hour) => {
    const hourlyObj = {
      icon: hour.condition.icon,
      text: hour.condition.text,
      feelsLike: hour.feelslike_c,
      humidity: hour.humidity,
      time: hour.time,
      windDir: hour.wind_dir,
      windSpeed: hour.wind_kph,
      temp: hour.temp_c,
    };

    return state.hourlyForecasts.push(hourlyObj);
  });
};

function ShowForecasts(props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [hourlyResults, setHourlyResults] = useState([]);
  const hourlyListRef = useRef();

  const hideOverlay = function () {
    hourlyListRef.current.style.display = "none";
  };

  const showOverlay = function () {
    hourlyListRef.current.style.display = "block";
  };

  useEffect(() => {
    setQuery(state.currentLocation);
  }, [state.currentLocation]);

  useEffect(() => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
        },
      }
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data.forecast.forecastday.forEach((day) => {
          getForecastData(day);
          getHourlyForecasts(day.hour);
        });
        setResults(state.forecasts);
        setHourlyResults(state.hourlyForecasts);
        console.log(state.hourlyForecasts);
        console.log(state.forecasts);
        state.forecasts = [];
        setLoading(false);
        state.hourlyForecasts = [];
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  if (loading) {
    return (
      <section>
        <Spinner />
      </section>
    );
  }
  // state.forecasts = [];
  return (
    <div className={classes.forecastsContainer}>
      <h2 className={classes.forecastsTitle}>3 Days Forecast</h2>
      <ul className={classes.forecastList}>
        {results.map((day) => {
          return (
            <li className={classes.forecastItem} key={day.date}>
              <button onClick={showOverlay} className={classes.hourlyBtn}>
                Hourly view
              </button>
              <h4>{day.date}</h4>
              <h2>
                <span>
                  <img alt="" src={day.icon} />
                </span>
                {day.text}
              </h2>
              <p>
                Temperature: {day.minTemp}&deg;C to {day.maxTemp}&deg;C
              </p>
              <p>Wind speed: {day.maxWindSpeed}km/h</p>
              <p>Humidity: {day.humidity}%</p>
              <p>{day.willRain !== 0 ? "Rain" : ""}</p>
              <p>{day.willSnoe !== 0 ? "Snow" : ""}</p>
            </li>
          );
        })}
      </ul>

      <div ref={hourlyListRef} className={classes.hourlyContainer}>
        <ul>
          <button onClick={hideOverlay} className={classes.xButton}>
            X
          </button>
          {hourlyResults.map((obj) => {
            return (
              <li key={obj.time} className={classes.hourlyItem}>
                <h5 className={classes.time}>{obj.time}</h5>
                <span className={classes.textAndIcon}>
                  <img src={obj.icon} />
                  <h4>{obj.text}</h4>
                </span>
                <span className={classes.tempContainer}>
                  <p>Temperature: {obj.temp}&deg;C</p>
                  <p>Feels like: {obj.feelsLike}&deg;C</p>
                </span>
                <span className={classes.windContainer}>
                  <p className={classes.windDir}>{obj.windDir}</p>
                  <p>Wind speed: {obj.windSpeed}km/h</p>
                </span>
              </li>
            );
          })}
          <button onClick={hideOverlay} className={classes.xButton}>
            X
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ShowForecasts;
