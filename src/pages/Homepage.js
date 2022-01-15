import Menu from "../components/Menu";
import classes from "./homepage.module.css";
import rainyImg from "../icons/rain.jpg";
import cloudyImg from "../icons/cloudy.jpeg";
import snowImg from "../icons/snow.jpg";
import sunnyImg from "../icons/sunny.jpeg";
import { useEffect, useRef, useState } from "react";
import Spinner from "../components/Spinner";
import ShowForecasts from "../components/ShowForecasts";
import ShowAstronomy from "../components/ShowAstronomy";
import netlifyIcon from "../icons/netlify-icon.png";
import githubIcon from "../icons/github-icon.png";

export const state = {
  lat: "",
  lng: "",
  currentLocation: "",
  realtimeResults: {},
  forecasts: [],
  astronomyResults: {},
  hourlyForecasts: [],
};

function Homepage() {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      console.log(location);
      state.lat = location.coords.latitude;
      state.lng = location.coords.longitude;
      const coords = [location.coords.latitude, location.coords.longitude];
      setNavigation(coords);
    },
    (reject) => {
      console.error(reject);
    }
  );
  const realtimeWeather = function (data) {
    const realtimeObj = {
      text: data.condition.text,
      icon: data.condition.icon,
      humidity: data.humidity,
      lastUpdate: data.last_updated,
      temp: data.temp_c,
      windDir: data.wind_dir,
      windSpeed: data.wind_kph,
      dayNight: data.is_day,
      feelsLike: data.feelslike_c,
    };

    state.realtimeResults = realtimeObj;
  };
  const searchRef = useRef();
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrrentWeather] = useState([]);
  const [navigation, setNavigation] = useState([]);
  const [mainImg, setMainImg] = useState();

  const searchWeather = function (e) {
    e.preventDefault();
    state.currentLocation = searchRef.current.value;
    setLocation(searchRef.current.value);
    searchRef.current.value = "";
  };

  useEffect(() => {
    fetch(
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${navigation[0]}&lon=${navigation[1]}&accept-language=en&polygon_threshold=0.0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
          "x-rapidapi-key":
            "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newObj = {
          country: data.address.country,
          municipality: data.address.municipality,
        };
        state.currentLocation = newObj.municipality;

        setLocation(newObj.municipality);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [state.lat, state.lng]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        realtimeWeather(data.current);
        setCurrrentWeather(state.realtimeResults);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [location]);

  let sourceImage = mainImg;
  useEffect(() => {
    if (isLoading === false) {
      if (currentWeather.text.toLowerCase().includes("clear"))
        setMainImg(sunnyImg);
      if (currentWeather.text.toLowerCase().includes("sunny"))
        setMainImg(sunnyImg);
      if (currentWeather.text.toLowerCase().includes("snow"))
        setMainImg(snowImg);
      if (currentWeather.text.toLowerCase().includes("rain"))
        setMainImg(rainyImg);
      if (currentWeather.text.toLowerCase().includes("cloud"))
        setMainImg(cloudyImg);
      if (currentWeather.text.toLowerCase().includes("overcast"))
        setMainImg(cloudyImg);
    }
  }, [currentWeather]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.homeBody}>
      <header className={classes.header}>
        <h1 className={classes.title}>Worldwide Weather</h1>
        <form onSubmit={searchWeather}>
          <input
            ref={searchRef}
            className={classes.searchInp}
            type="text"
            placeholder="Search Destination"
          />
          <button className={classes.searchBtn}></button>
        </form>
      </header>
      <div
        style={{ backgroundImage: `url(${sourceImage})` }}
        className={classes.currentWeather}
      >
        <div className={classes.currentWeatherContainer}>
          <h2 className={classes.textLocation}>{location.toUpperCase()}</h2>
          <h3>
            <span>
              <img src={currentWeather.icon}></img>
            </span>
            {currentWeather.text}
          </h3>
          <p>Temperature: {currentWeather.temp}&deg;C</p>
          <p>Feel like: {currentWeather.feelsLike}&deg;C</p>
          <p>Wind direction: {currentWeather.windDir}</p>
          <p>Wind Speed: {currentWeather.windSpeed}km/h</p>
          <p className={classes.updatedText}>
            last update: {currentWeather.lastUpdate}
          </p>
        </div>
      </div>

      <ShowForecasts />
      <ShowAstronomy />
      <footer className={classes.footer}>
        <p>
          This site is designed and developed by{" "}
          <a href={"https://www.linkedin.com/in/argyris-kantaras-291277219/"}>
            Argyris Kantaras
          </a>
        </p>
        <p>
          This is a small web app that is mainly developed for study purposes!!
        </p>
        <span className={classes.links}>
          <a
            className={classes.netlify}
            href={
              "https://app.netlify.com/teams/argyris-kantaras/overview?_ga=2.82265109.2064366115.1642171674-536540780.1623943727"
            }
          >
            <img className={classes.linkIcon} alt="netlify" src={netlifyIcon} />
            Netlify{" "}
          </a>
          <a
            className={classes.github}
            href={"https://github.com/Argyris-Kantaras/"}
          >
            <img className={classes.linkIcon} alt="github" src={githubIcon} />
            Github
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Homepage;
