import { useContext, useEffect } from "react";
import styles from "../css modules/LocationDetails.module.css";
import getWeatherResults from "../handlers/getWeatherResults";
import LocaleContext from "../hooks/locale-context";

function LocationDetails(props) {
  const locale = useContext(LocaleContext);

  useEffect(() => {}, []);
  const data = props.data;
  return (
    <div>
      <div>
        <span className={styles.localTime}>
          {data.location ? data.location.localTime : ""}
        </span>
        <div className={styles.country}>
          <h3>{data.location ? data.location.name : ""}</h3>
          <p>{data.location ? data.location.country : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
