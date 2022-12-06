import Header from "../components/Header";
import styles from "./Homepage.module.css";
import { useEffect, useState } from "react";
import getCurrentLocation from "../handlers/getCurrentLocation";
import ShowCurrentWeatherResults from "../components/ShowCurrentWeatherResults";
import LocaleContext from "../hooks/locale-context";
import Show3DaysForecast from "../components/Show3DaysForecast";
import Footer from "../components/Footer";

function Homepage() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    getCurrentLocation(setLocation);
  }, []);
  return (
    <LocaleContext.Provider value={{ location: location }}>
      <div className={styles.mainPage}>
        <Header setState={setLocation} />
        <ShowCurrentWeatherResults />
        <Show3DaysForecast />
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
}

export default Homepage;
