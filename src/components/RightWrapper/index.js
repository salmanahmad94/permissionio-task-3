import React from "react";

import classes from "./RightWrapper.module.css";

const RightWrapper = ({ children }) => {
  return <div className={classes.RightWrapper}>{children}</div>;
};

export default RightWrapper;
