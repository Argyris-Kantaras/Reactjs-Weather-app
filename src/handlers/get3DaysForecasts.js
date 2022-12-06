import axios from "axios";
import createForecastsObj from "./createForecastsObj";
import createHourlyObj from "./createHourlyObj";

const get3DaysForecasts = function (
  location,
  setState,
  setLocation,
  setHourly
) {
  const forecasts = [];
  const refinedForecasts = [];
  const hourlyResults = [];
  const refinedHourlyForecast = [];
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: location, days: "3" },
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      forecasts.push(...response.data.forecast.forecastday);
      forecasts.forEach((result) => {
        const newForecast = createForecastsObj(result);
        refinedForecasts.push(newForecast);
        hourlyResults.push(result.hour);
      });
      hourlyResults.forEach((result) => {
        const everyHour = [];
        result.forEach((hour) => {
          const hourlyDetails = createHourlyObj(hour);
          everyHour.push(hourlyDetails);
        });
        refinedHourlyForecast.push(everyHour);
      });

      setState(refinedForecasts);
      setLocation(response.data.location);
      setHourly(refinedHourlyForecast);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default get3DaysForecasts;
