import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import classes from "./Button.module.css";

const Button = ({ onClick, isSubmitting, formHasError }) => {
  return (
    <button
      disabled={isSubmitting}
      style={{ opacity: isSubmitting ? 0.5 : 1 }}
      onClick={onClick}
      type="submit"
      className={classes.Button}
    >
      {!formHasError && (
        <FontAwesomeIcon
          size="lg"
          icon={faCheck}
          className={classes.CheckMarkIcon}
        />
      )}
      {isSubmitting && (
        <FontAwesomeIcon
          size="lg"
          icon={faArrowsRotate}
          className={classes.RefreshIcon}
        />
      )}
      Submit
    </button>
  );
};

export default Button;
