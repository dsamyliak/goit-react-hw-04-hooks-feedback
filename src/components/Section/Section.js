import React from "react";
import "./Section.css";
import propTypes from "prop-types";

const Section = ({ title, children }) => (
  <section className="Feedback__Counter">
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;
