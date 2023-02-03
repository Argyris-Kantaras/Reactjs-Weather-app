const createHourlyObj = function (data) {
  const obj = {
    rain: data.chance_of_rain,
    snow: data.chance_of_snow,
    text: data.condition.text,
    icon: data.condition.icon,
    date: data.time,
    time: data.time.slice(10),
    windDir: data.wind_dir,
    windKph: data.wind_kph,
    windMph: data.wind_mph,
    tempC: data.temp_c,
    tempF: data.temp_f,
    isDay: data.is_day,
  };
  return obj;
};

export default createHourlyObj;
