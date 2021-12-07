import React from "react";
import css_classes from "./Card.module.css";
const Card = ({ children }) => {
  return <div className={css_classes.card}>{children}</div>;
};

export default Card;
