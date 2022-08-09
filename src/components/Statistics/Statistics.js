import React from "react";
import styles from "./Statistics.module.css";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={styles.Feedback__Statistics}>
        <span className={(styles.Good, styles.Result)}>
          Good: <span className={styles.Good}>{good}</span>
        </span>
        <span className={(styles.Neutral, styles.Result)}>
          Neutral: <span className={styles.Neutral}>{neutral}</span>
        </span>
        <span className={(styles.Bad, styles.Result)}>
          Bad: <span className={styles.Bad}>{bad}</span>
        </span>
      </div>
      <div className={styles.Additional__Statistics}>
        <span className={styles.Result}>
          Total: <span className={styles.Total}>{total}</span>
        </span>
        <span className={(styles.Positive__Percentage, styles.Result)}>
          Positive feedback:{" "}
          <span className={styles.Positive__Percentage}>
            {positivePercentage}%
          </span>
        </span>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
