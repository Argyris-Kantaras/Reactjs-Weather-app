import Header from "../components/Search bar/SearchBar";
import styles from "./Homepage.module.css";
import { useEffect, useState } from "react";
import getCurrentLocation from "../handlers/getCurrentLocation";
import ShowCurrentWeatherResults from "../components/Current weather/ShowCurrentWeatherResults";
import LocaleContext from "../hooks/locale-context";
import Footer from "../components/Footer/Footer";

function Homepage() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    getCurrentLocation(setLocation);
  }, []);
  return (
    <LocaleContext.Provider value={{ location: location }}>
      <div className={styles.mainPage}>
        <h1 className={styles.appName}>Worldwide Weather</h1>
        <ShowCurrentWeatherResults setLocation={setLocation} />
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
}

export default Homepage;
