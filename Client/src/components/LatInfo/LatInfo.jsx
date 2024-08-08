import styles from "./LatInfo.module.css";
import { formatDate } from "../../utils/formatDate";

function LatInfo({ weatherData }) {
  if (!weatherData) return <div className={styles.latInfo}></div>;

  const { lat, lon } = weatherData.location;
  const { localtime } = weatherData.location;

  return (
    <div className={styles.latInfo}>
      <p className={styles.latitLongit}>
        <span>latitude {lat}</span>
        <span>longitude {lon}</span>
      </p>
      <p>accurate to {formatDate(localtime)}</p>
    </div>
  );
}

export default LatInfo;
