import React from "react";

import Button from "./Button";

import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.Form}>
      <div className={classes.LabelsContainer}>
        <label>Enter a valid GUID here</label>
        <label className={classes.ErrorLabel}>GUID invalid</label>
      </div>
      <input className={classes.Input} type="text" />
      <Button />
    </form>
  );
};

export default Form;
