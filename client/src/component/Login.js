import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import Appbar from "./Appbar";
import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        All Copyrights reserved by Vin and Team
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    marginTop: "80px",
    //   background:"black"
  },
  button: {
    justifyContent: "center",
    marginTop: "30px",
    border: "solid",
    borderRadius: 15,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  privacy: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
  },
}));

export default function Login() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Appbar />
      <center style={{ marginTop: 34 }}>
        <Typography
          variant="h4"
          component="h5"
          style={{ alignContent: "center" }}
        >
          Join Vin Or
          <br /> Sign In
        </Typography>
      </center>
      <Grid item xs={12}>
        <a href="http://localhost:3030/login/google">
        <Button fullWidth className={classes.button}>
          Continue With Google
        </Button>
        </a>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth className={classes.button} onClick={handleClickOpen}>
          Continue With Email
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}><h1>hi</h1></Dialog>
      </Grid>
      <Typography className={classes.privacy}>
        click "Continue" to agree to Vin's terms of <br />
        service acknowledgment that Vin's
        <br />
        Privacy Policy applies to you
      </Typography>

      <Box className="footer" mt={8}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 offset-md-2">About</div>
            <div className="col-md-3 offset-md-3">Help</div>
          </div>
        </div>
        <Copyright />
      </Box>
    </Container>
  );
}
