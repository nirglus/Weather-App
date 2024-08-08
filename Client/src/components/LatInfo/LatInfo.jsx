import styles from "./LatInfo.module.css";

function formatDate(dateString) {
  const date = new Date(dateString);

  const optionsDate = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-GB", optionsTime).format(
    date
  );

  return `${formattedDate} at ${formattedTime}`;
}

function LatInfo({ weatherData }) {
  if (!weatherData) return null;

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
