import React from "react";
import useStyles from "./styles";

const Photo = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img alt="" src={props.src} className={classes.photo} onClick={props.onclick} id={props.id} />
      <div className={classes.bottomRight}>{props.size}</div>
    </div>
  );
};

export default Photo;
