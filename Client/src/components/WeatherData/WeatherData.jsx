import styles from "./WeatherData.module.css";
import { formatDate, formatHour } from "../../utils/formatDate";

function WeatherData({ data }) {
  const { location, current, forecast } = data;
  const { temp_c, condition, precip_mm, humidity, wind_kph } = current;

  const formattedDateTime = formatDate(location.localtime);

  const filteredHours = forecast.forecastday[0].hour.filter(hourData => {
    const hour = new Date(hourData.time).getHours();
    return hour >= 13 && hour <= 17;
  });

  return (
    <div className={styles.weatherData}>
      <div className={styles.location}>
        <p className={styles.city}>{location.name}</p>
        <p className={styles.country}>{location.country}</p>
        <p className={styles.currentDate}>{formattedDateTime}</p>
      </div>
      <div className={styles.currentTemp}>
        <p className={styles.currentDegree}>{Math.round(temp_c)}</p>
        <p className={styles.currentCondition}>{condition.text}</p>
      </div>
      <div className={styles.weatherStats}>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>precipitation</p>
          <p className={styles.weatherStatsData}>{precip_mm} mm</p>
        </div>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>humidity</p>
          <p className={styles.weatherStatsData}>{humidity}%</p>
        </div>
        <div className={styles.weatherStatsItem}>
          <p className={styles.weatherStatsHeading}>wind</p>
          <p className={styles.weatherStatsData}>{wind_kph} km/h</p>
        </div>
      </div>
      <div className={styles.hourTemp}>
        {filteredHours.map((hourData, index) => (
          <div key={index} className={styles.hourTempItem}>
            <p className={styles.hour}>{formatHour(hourData.time)}</p>
            <p className={styles.temp}>{Math.round(hourData.temp_c)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherData;
