import "./index.css";
import React, { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import PropTypes from "prop-types";

export default function FeedbackApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  let [positivePercentage, setPositivePercentage] = useState(0);

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
    console.log(option);
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
    // console.log("useEffect Total");
    setTotal(good + neutral + bad);
    console.log("useEf total=", good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    // console.log("useEffect PositivePercentage");
    setPositivePercentage(Math.round(good > 0 ? (good / total) * 100 : 0));
    console.log("positivePercentage", positivePercentage);
  }, [good, total, positivePercentage]);

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
            positivePercentage={positivePercentage}
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
