import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './../assets/images/pexels-andrea-piacquadio-3865577.jpg';
const axios = require('axios');


export default class SignInSide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSuccesful: '0'
      }
      this.signUpHandler = this.signUpHandler.bind(this);
    }

    componentDidMount() {

    }

    signUpHandler(e) {
      e.preventDefault();
      let result;
      let params = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value
      };

      axios.post(
        'http://localhost:4000/api/User/UserSignUp', {
          params: params
        }
      ).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error);
      });
    };

  render() {
    return (
      <Grid container component="main" className="LoginForm">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="Image" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="Paper">
            <Avatar className="Avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Kayıt Ol
            </Typography>
            <form className="Form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="İsim"
              name="name"
              autoComplete="isim"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Soyad"
              name="surname"
              autoComplete="soyad"
              autoFocus
            />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Adresi"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Parola"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="repassword"
                label="Parola Tekrar"
                type="repassword"
                id="repassword"
                autoComplete="current-password"
              />
              <Link to={"/"}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="SubmitButton"
                  onClick = {this.signUpHandler}
                >
                  Oturum Aç
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link to={"/LoginPage"} variant="body2">
                    {"Zaten Kayıtlı mısınız? Giriş Yapın."}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
