import React from "react";
import css from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className={css.NoFeedback__Statistics}>
    <span className={css.NoFeedback__Msg}>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
