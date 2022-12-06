const createCurrentWeatherObj = function (data, setState) {
  const obj = {
    icon: data.current.condition.icon,
    text: data.current.condition.text,
    feelsLikeC: data.current.feelslike_c,
    feelsLikeF: data.current.feelslike_f,
    gustKph: data.current.gust_kph,
    gustMph: data.current.gust_mph,
    humidity: data.current.humidity,
    isDay: data.current.is_day,
    lastUpdate: data.current.last_updated,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    uv: data.current.uv,
    windDir: data.current.wind_dir,
    windKph: data.current.wind_kph,
    windMph: data.current.wind_mph,
    location: {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
      localTime: data.location.localtime,
      coords: [data.location.lat, data.location.lon],
    },
  };
  setState(obj);
};

export default createCurrentWeatherObj;
