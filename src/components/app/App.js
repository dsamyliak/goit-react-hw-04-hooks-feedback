import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";

export default function FeedbackApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const addGoodFb = () => {
    setGood((prevState) => prevState + 1);
  };

  const addNeutralFb = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const addBadFb = () => {
    setBad((prevState) => prevState + 1);
  };

  const handleClick = (option) => {
    switch (option) {
      case "good":
        addGoodFb();
        break;

      case "neutral":
        addNeutralFb();
        break;

      case "bad":
        addBadFb();
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const positivePercentage = () => {
    return Math.round(good > 0 ? (good / total) * 100 : 0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}

FeedbackApp.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
    })
  ),
};
