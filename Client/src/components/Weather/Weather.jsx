import WeatherData from "../WeatherData/WeatherData";
import Input from "../Input/Input";
import styles from "./Weather.module.css";
import logo from "/logo.svg";
import LatInfo from "../LatInfo/LatInfo";
import useWeatherData from "../../hooks/useWeatherData";
import { useState } from "react";

function Weather() {
  const { weatherData, error, fetchWeather } = useWeatherData();
  const [city, setCity] = useState("");
  const handleChange = (newCity) => {
    setCity(newCity);
  };

  const handleClick = () => {
    fetchWeather(city);
  };

  return (
    <main className={styles.weatherApp}>
      <section className={styles.weatherAppLeft}>
        <img className={styles.fintekLogo} src={logo} alt="fintek-logo" />
        <div className={styles.leftSideDesc}>
          <p className={styles.appDesc}>
            Use our weather app to see the weather around the world
          </p>
          <Input
            label="City name"
            buttonTxt="Check"
            onChange={handleChange}
            onClick={handleClick}
            error={error}
          />
        </div>
        <LatInfo weatherData={weatherData} />
      </section>
      <aside
        className={
          weatherData ? styles.weatherAppRight : styles.weatherAppRightNoData
        }
      >
        {weatherData && <WeatherData data={weatherData} />}
      </aside>
    </main>
  );
}

export default Weather;
