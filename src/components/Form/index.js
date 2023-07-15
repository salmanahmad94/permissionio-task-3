import React, { useState } from "react";

import Button from "./Button";

import classes from "./Form.module.css";

const validateGUID = (input) => {
  var pattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  return pattern.test(input);
};

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [GUID, setGUID] = useState("");
  const [formHasError, setFormHasError] = useState(false);

  const inputChangeHandler = (event) => {
    setGUID(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (validateGUID(GUID)) {
        setFormHasError(false);
      } else {
        setFormHasError(true);
      }
    }, 2000);
  };

  return (
    <form className={classes.Form}>
      <div className={classes.LabelsContainer}>
        <label className={classes.DescriptionLabel}>
          Enter a valid GUID here
        </label>
        {formHasError && (
          <label className={classes.ErrorLabel}>GUID invalid</label>
        )}
      </div>
      <input
        disabled={isSubmitting}
        className={classes.Input}
        style={{ opacity: isSubmitting ? 0.5 : 1 }}
        type="text"
        value={GUID}
        onChange={inputChangeHandler}
      />
      <Button
        isSubmitting={isSubmitting}
        formHasError={formHasError}
        onClick={onSubmitHandler}
      />
    </form>
  );
};

export default Form;
