import { useContext, useEffect, useRef, useState } from "react";
import get3DaysForecasts from "../handlers/get3DaysForecasts";
import LocaleContext from "../hooks/locale-context";
import ForecastDetails from "./ForecastDetails";
import HourlyForecast from "./HourlyForecast";

function Show3DaysForecast() {
  const locale = useContext(LocaleContext);
  const hourlyRefs = useRef([]);
  const xBtnRef = useRef();

  const [data, setData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [hourlyData, setHourlyData] = useState([]);
  useEffect(() => {
    if (locale.location)
      get3DaysForecasts(
        locale.location,
        setData,
        setCurrentLocation,
        setHourlyData
      );
  }, [locale]);
  return (
    <div>
      <div>
        <h3>3 days forecast of </h3>
        <span style={{ color: "yellow" }}>{currentLocation.name}</span>
        {"-"}
        <span style={{ color: "yellow" }}>{currentLocation.country}</span>
      </div>
      <div>
        <ForecastDetails
          closeBtn={xBtnRef}
          showHourlyRefs={hourlyRefs}
          results={data}
        />
        <HourlyForecast
          closeBtn={xBtnRef}
          refs={hourlyRefs}
          results={hourlyData}
        />
      </div>
    </div>
  );
}

export default Show3DaysForecast;
