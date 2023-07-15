import React from "react";

import classes from "./TextBox.module.css";

const TextBox = () => {
  return (
    <div className={classes.TextBox}>
      <p className={classes.Content}>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo.
      </p>
    </div>
  );
};

export default TextBox;
