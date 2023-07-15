import React from "react";

import classes from "./LeftWrapper.module.css";

const LeftWrapper = ({ children }) => {
  return <div className={classes.leftWrapper}>{children}</div>;
};

export default LeftWrapper;
