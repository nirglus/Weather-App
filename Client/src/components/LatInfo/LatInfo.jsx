import styles from "./LatInfo.module.css";

function LatInfo() {
  return (
    <div className={styles.latInfo}>
      <p className={styles.latitLongit}><span>latitude 32.07</span> <span>longitude 34.76</span></p>
      <p>accurate to 13/02/2022 at 16:24</p>
    </div>
  )
}

export default LatInfo
