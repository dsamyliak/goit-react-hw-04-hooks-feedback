import React from "react";
import css from "./Section.module.css";
import propTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className={css.Feedback__Counter}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;
