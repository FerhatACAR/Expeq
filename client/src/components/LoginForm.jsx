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
      this.loginHandler = this.loginHandler.bind(this);
    }

    componentDidMount() {

    }

    loginHandler(e) {
      e.preventDefault();
      let result;
      let params = {
        userEmail: document.getElementById("email").value,
        userPassword: document.getElementById("password").value
      };

      axios.get(
        'http://localhost:4000/api/User/UserLogin', {
          params: params
        }
      ).then((response) => {
        if (response.data.length > 0) {
          window.sessionStorage.setItem('USER_LOGGED', true);
          window.sessionStorage.setItem('USER_ID', response.data[0]._id.toString());
          window.sessionStorage.setItem('USER_NAME', response.data[0].name.toString() + " " + response.data[0].surname.toString());
          window.sessionStorage.setItem('USER_TYPE', '1');//burası değiştirilecek
          this.setState({isSuccesful: '1'})
        }else {
          this.setState({isSuccesful: '0'})
          window.sessionStorage.setItem('USER_LOGGED', false);
        }
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
              Oturum Aç
            </Typography>
            <form className="Form" noValidate>
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Bilgileri Hatırla"
              />
              <Link to={"/"}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="SubmitButton"
                  onClick = {this.loginHandler}
                >
                  Giriş Yap
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Şifremi Unuttum
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/SignUp"} variant="body2">
                    {"Hesabın yok mu? Kayıt ol"}
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
