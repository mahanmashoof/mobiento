import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  photo: {
    margin: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0",
    },
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform .5s",
    },
  },
  container: {
    position: "relative",
    textAlign: "center",
  },
  bottomRight: {
    position: "absolute",
    bottom: "0px",
    right: "40px",
    color: "#C0C0C0",
    [theme.breakpoints.down("sm")]: {
      bottom: "10px",
      right: "5px",
    },
  },
}));
