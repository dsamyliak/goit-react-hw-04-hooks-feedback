import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className={styles.NoFeedback__Statistics}>
    <span className={styles.NoFeedback__Msg}>{message}</span>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
