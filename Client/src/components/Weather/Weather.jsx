import WeatherData from "../WeatherData/WeatherData";
import styles from "./Weather.module.css";
function Weather() {
  return (
    <main className={styles.weatherApp}>
      <section>
        Our weather application
      </section>
      <aside className={styles.weatherDataBg}>
        <WeatherData />
      </aside>
    </main>
  );
}

export default Weather;
