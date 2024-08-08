import WeatherData from "../WeatherData/WeatherData";
import Input from "../Input/Input";
import styles from "./Weather.module.css";
import logo from "/logo.svg";

function Weather() {
  return (
    <main className={styles.weatherApp}>
      <section className={styles.weatherAppLeft}>
        <img className={styles.fintekLogo} src={logo} alt="fintek-logo" />
        <div className={styles.leftSideDesc}>
          <p className={styles.appDesc}>
            Use our weather app to see the weather around the world
          </p>
          <Input label="City name" buttonTxt="Check" />
        </div>
      </section>
      <aside className={styles.weatherAppRight}>
        <WeatherData />
      </aside>
    </main>
  );
}

export default Weather;
