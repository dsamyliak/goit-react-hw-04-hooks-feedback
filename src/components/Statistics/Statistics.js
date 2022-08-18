import React from "react";
import css from "./Statistics.module.css";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={css.Feedback__Statistics}>
        <span className={(css.Good, css.Result)}>
          Good: <span className={css.Good}>{good}</span>
        </span>
        <span className={(css.Neutral, css.Result)}>
          Neutral: <span className={css.Neutral}>{neutral}</span>
        </span>
        <span className={(css.Bad, css.Result)}>
          Bad: <span className={css.Bad}>{bad}</span>
        </span>
      </div>
      <div className={css.Additional__Statistics}>
        <span className={css.Result}>
          Total: <span className={css.Total}>{total}</span>
        </span>
        <span className={(css.Positive__Percentage, css.Result)}>
          Positive feedback:{" "}
          <span className={css.Positive__Percentage}>
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
