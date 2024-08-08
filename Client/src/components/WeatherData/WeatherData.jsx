import styles from "./WeatherData.module.css";

function WeatherData() {
  return (
    <div className={styles.weatherData}>
      <div className={styles.location}>
        <p className={styles.city}>Tel Aviv</p>
        <p className={styles.country}>Israel</p>
        <p className={styles.currentDate}>13/2/22 at 16:00</p>
      </div>
      <div className={styles.currentTemp}>
        <p className={styles.currentDegree}>
          18
        </p>
        <p className={styles.currentCondition}>sunny</p>
      </div>
      <div className={styles.weatherStats}>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>precipitation</p>
          <p className={styles.weatherStatsData}>0 mm</p>
        </div>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>humidity</p>
          <p className={styles.weatherStatsData}>53%</p>
        </div>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>wind</p>
          <p className={styles.weatherStatsData}>28 km/h</p>
        </div>
      </div>
      <div className={styles.hourTemp}>
        <div className={styles.hourTempItem}>
            <p className={styles.hour}>13:00</p>
            <p className={styles.temp}>18</p>
        </div>
        <div className={styles.hourTempItem}>
            <p className={styles.hour}>13:00</p>
            <p className={styles.temp}>18</p>
        </div>
        <div className={styles.hourTempItem}>
            <p className={styles.hour}>13:00</p>
            <p className={styles.temp}>18</p>
        </div>
        <div className={styles.hourTempItem}>
            <p className={styles.hour}>13:00</p>
            <p className={styles.temp}>18</p>
        </div>
        <div className={styles.hourTempItem}>
            <p className={styles.hour}>13:00</p>
            <p className={styles.temp}>18</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
