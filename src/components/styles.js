import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "4rem 0 3rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  text: {
    marginTop: "-1rem"
  },
  photoForm: {
    minWidth: 200,
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0 0",
    },
  },
  heading: {
    textAlign: "center",
  },
  photoGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: '3rem 0'
  },
}));
