import React from "react";
import useStyles from "./styles";

const Photo = (props) => {
  const classes = useStyles();
  return (
    <div>
      <img alt="" src={props.src} className={classes.photo} />
    </div>
  );
};

export default Photo;
