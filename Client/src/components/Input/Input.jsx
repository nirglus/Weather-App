import styles from "./Input.module.css";

function Input({ label, buttonTxt, onChange, onClick, error }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.input}>
      <label>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          className={error ? styles.errorInput : ""}
          type="text"
          onChange={handleChange}
        />
        <button onClick={onClick}>{buttonTxt}</button>
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}

export default Input;
