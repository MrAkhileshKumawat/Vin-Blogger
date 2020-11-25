import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Appbar from "./extras/Appbar";
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from "react-router-dom";
import Navbar2 from "./views/Navbar2";
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

const Spacer = () => {
  <div style={{height:"30px"}}></div>
}
const useStyles = makeStyles((theme) => ({

  container: {
    justifyContent: "center",
    height:530
    // marginTop: "80px",
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
  const [open, setOpen] = React.useState(null);
  const [name, setname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [conf_password, setconf_password] = useState('')
  const [token, settoken] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogin =()=>{
    console.log("working");
    const data={
      email:email,
      password:password,
      username:username,
      name:name,
      confirm_password:conf_password
    }
    axios.post("http://localhost:3030/signup",data)
    .then(res=>{
      alert(res.data.message)
      console.log(res.data);
      if(res.data.message === "Your Account is Created"){
        setOpen(false)
      }
      
    })
    .catch(err=>console.log(err))
  }
  const googleLogin=()=>{
    console.log("ggggggg");
    axios.get("http://localhost:3030/")
    .then(googleRes=>console.log(googleRes,"googleee"))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <Navbar2 />
    <Container component="main" maxWidth="xs" className={classes.container}>
      
      <center >
        <Typography
          variant="h4"
          component="h5"
          style={{ alignContent: "center" }}
        >
          Join Vin Or
          <br /> Sign Up
        </Typography>
      </center>
      <Grid item xs={12}>
        
        <Button fullWidth className={classes.button}
        onClick={googleLogin}>
          Sign up With Google
        </Button>
        
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth className={classes.button} onClick={handleClickOpen}>
          Continue With Email
        </Button>
        
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Login to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
          required={true}
              fullWidth
              id="outlined-helperText"
              label="name"
              type="name"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              variant="outlined"
            />
          <div style={{height:30}}>

          </div>
          <TextField
          required={true}
              fullWidth
              id="outlined-helperText"
              label="username"
              type="username"
              value={username}
              onChange={(e)=>setusername(e.target.value)}
              variant="outlined"
            />
          <div style={{height:30}}>

          </div>
         
          <TextField
          required={true}
              fullWidth
              id="outlined-helperText"
              label="email"
              type="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              variant="outlined"
            />
          <div style={{height:30}}>

          </div>
              <TextField
              required={true}
              fullWidth
              id="outlined-helperText"
              label="enter password"
              type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              variant="outlined"
            /> 
            <div style={{height:30}}>

            </div>
                <TextField
                required={true}
                fullWidth
                id="outlined-helperText"
                label="confirm password"
                type="password"
                value={conf_password}
                onChange={(e)=>setconf_password(e.target.value)}
                variant="outlined"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            signup
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
      <Typography className={classes.privacy}>
        click "Continue" to agree to Vin's terms of <br />
        service acknowledgment that Vin's
        <br />
        Privacy Policy applies to you
      </Typography>

      
      {open === false ? <Redirect to ="/login" /> :null}
    </Container>
    </div>
  );
}
