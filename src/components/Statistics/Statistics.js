import React from "react";
import "./Statistics.css";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div className="Feedback__Statistics">
      <span className="Good Result">
        Good: <span className="Good Value">{good}</span>
      </span>
      <span className="Neutral Result">
        Neutral: <span className="Neutral Value">{neutral}</span>
      </span>
      <span className="Bad Result">
        Bad: <span className="Bad Value">{bad}</span>
      </span>
    </div>
    <div className="Additional__Statistics">
      <span className="Total Result">
        Total: <span className="Total Value">{total}</span>
      </span>
      <span className="Positive__Percentage Result">
        Positive feedback:{" "}
        <span className="Positive__Percentage Value">
          {positivePercentage}%
        </span>
      </span>
    </div>
  </>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
