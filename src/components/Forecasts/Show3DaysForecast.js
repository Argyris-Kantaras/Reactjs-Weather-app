import { useContext, useEffect, useRef, useState } from "react";
import get3DaysForecasts from "../../handlers/get3DaysForecasts";
import LocaleContext from "../../hooks/locale-context";
import ForecastDetails from "../Forecast details/ForecastDetails";
import HourlyForecast from "../Hourly forecasts/HourlyForecast";
import styles from "./Show3DaysForecast.module.css";
import TextSelector from "../text selector/TextSelector";
import NavigationBar from "../navigation bar/NavigationBar";

function Show3DaysForecast(props) {
  const locale = useContext(LocaleContext);
  const [data, setData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  const [dayOfForecast, setDayOfForecast] = useState(0);
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    if (locale.location)
      get3DaysForecasts(
        locale.location,
        setData,
        setCurrentLocation,
        setHourlyData
      );
    if (data.length > 0) props.setBackgroundImg(data[dayOfForecast].text);
  }, [locale, dayOfForecast, data]);

  return (
    <div className={styles.forecastsContainer}>
      <NavigationBar
        dayOfForecast={dayOfForecast}
        degree={degree}
        setDayOfForecast={setDayOfForecast}
        setDegree={setDegree}
      />
      <TextSelector
        degreesSign={degree}
        data={data}
        dayOfForecast={dayOfForecast}
      />
      <ForecastDetails
        degreesSign={degree}
        dayToShow={dayOfForecast}
        results={data}
      />
      <HourlyForecast
        degreesSign={degree}
        results={hourlyData}
        day={dayOfForecast}
      />
    </div>
  );
}

export default Show3DaysForecast;
