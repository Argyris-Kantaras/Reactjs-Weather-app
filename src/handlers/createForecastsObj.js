const createForecastsObj = function (data) {
  const obj = {
    date: data.date,
    humidity: data.day.avghumidity,
    maxTempC: data.day.maxtemp_c,
    minTempC: data.day.mintemp_c,
    maxTempF: data.day.maxtemp_f,
    minTempF: data.day.mintemp_f,
    windKph: data.day.maxwind_kph,
    windMph: data.day.maxwind_mph,
    rain: data.day.daily_chance_of_rain,
    snow: data.day.daily_chance_of_snow,
    mainIcon: data.day.condition.icon,
    text: data.day.condition.text,
    uv: data.day.uv,
  };
  return obj;
};
export default createForecastsObj;
