import React from "react";
import "./Notification.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className="NoFeedback__Statistics">
    <span className="NoFeedback__Msg">{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
