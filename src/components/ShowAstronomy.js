import { useEffect, useState } from "react";
import { state } from "../pages/Homepage";
import classes from "./showAstronomy.module.css";
import sunriseImg from "../icons/sunrise-icon.jpg";
import sunsetImg from "../icons/sunset.png";

function ShowAstronomy() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});

  useEffect(() => {
    setQuery(state.currentLocation);
  }, []);

  useEffect(() => {
    fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=europe`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const astronomyObj = {
          illumination: data.astronomy.astro.moon_illumination,
          moonPhase: data.astronomy.astro.moon_phase,
          moonrise: data.astronomy.astro.moonrise,
          moonset: data.astronomy.astro.moonset,
          sunrise: data.astronomy.astro.sunrise,
          sunset: data.astronomy.astro.sunset,
        };
        setResults(astronomyObj);
        console.log(astronomyObj);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return (
    <div className={classes.astronomyMainContainer}>
      <h2>Some astronomy Information</h2>
      <div className={classes.moonDetails}>
        <p className={classes.moonInfo}>Illumination: {results.illumination}</p>
        <p className={classes.moonInfo}>Phase: {results.moonPhase}</p>
        <p className={classes.moonInfo}>
          {results.moonrise} {"↑"}
        </p>
        <p className={classes.moonInfo}>
          {results.moonset} {"↓"}
        </p>
      </div>
      <div className={classes.sunDetails}>
        <h5>Sunrise</h5>
        <p>
          <img className={classes.sunIcon} src={sunriseImg} />
          {results.sunrise}
        </p>
        <h5>Sunset</h5>
        <p>
          <img className={classes.sunIcon} src={sunsetImg} />
          {results.sunset}
        </p>
      </div>
    </div>
  );
}

export default ShowAstronomy;
