import axios from "axios";
import createCurrentWeatherObj from "./createCurrentWeatherObj";

const getWeatherResults = async function (location, weatherResults, received) {
  received(false);
  try {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: location },
      headers: {
        "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        createCurrentWeatherObj(response.data, weatherResults);
        received(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};
export default getWeatherResults;
