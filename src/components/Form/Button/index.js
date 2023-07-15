import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./Button.module.css";

const Button = () => {
  return (
    <button type="submit" className={classes.Button}>
      <FontAwesomeIcon size="lg" icon={faCheck} className={classes.CheckMark} />{" "}
      Submit
    </button>
  );
};

export default Button;
