import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    photo: {
        margin: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 0 0',
        }
    }
}));