import React from "react";

import Mona from "../../assets/mona.png";

import classes from "./RightWrapper.module.css";

const RightWrapper = ({ children }) => {
  return (
    <div className={classes.RightWrapper}>
      <img className={classes.Image} src={Mona} alt="mona lisa" />
    </div>
  );
};

export default RightWrapper;
