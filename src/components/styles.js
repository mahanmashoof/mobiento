import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: '5rem 0 2rem',
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
    },
  },
  photoForm: {
    minWidth: 200,
    [theme.breakpoints.down('sm')]: {
        margin: '2rem 0 0'
    }
  },
  heading: {
      textAlign: 'center'
  }
}));
