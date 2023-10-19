import styles from "./MeasureDots.module.css";

function MeasureDots() {
  return (
    <div>
      <div className={styles.dotsContainer}>
        <div className={styles.yellow}></div>
        <div className={styles.yellowDark}></div>
        <div className={styles.orange}></div>
        <div className={styles.orangeRed}></div>
        <div className={styles.red}></div>
      </div>
      <h4>UV Measure</h4>
      <div className={styles.UVMeasure}>
        <div className={styles.measureSection}>
          <h5>Safe</h5>
          <div className={styles.measure}>
            <span className={styles.yellowDot}>.</span>
            <span>1-2</span>
          </div>
          <div className={styles.measure}>
            <span className={styles.yellowDarkDot}>.</span>
            <span>3-4</span>
          </div>
          <div className={styles.measure}>
            <span className={styles.orangeDot}>.</span>
            <span>5-6</span>
          </div>
        </div>
        <div className={styles.measureSection}>
          <h5>Dangerous</h5>
          <div className={styles.measure}>
            <span className={styles.orangeRedDot}>.</span>
            <span>7-8</span>
          </div>
          <div className={styles.measure}>
            <span className={styles.redDot}>.</span>
            <span>9++</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MeasureDots;
