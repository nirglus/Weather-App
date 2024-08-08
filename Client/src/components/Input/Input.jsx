import styles from "./Input.module.css";

function Input({ label, buttonTxt, error }) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.inputWrapper}>
        <input className={error ? styles.errorInput : ''} type="text" />
        <button>{buttonTxt}</button>
      </div>
      { error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}

export default Input;
