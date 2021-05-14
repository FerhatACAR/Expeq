import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
        surname: document.getElementById("surname").value,
        userType: (document.getElementById("userType").checked)? '1':'0',
        userGender: (document.getElementById("girl").checked)? '1':'0'
      };

      if (params.password != document.getElementById("repassword").value) {
        alert("Şifreler eşleşmiyor");
        return;
      }

      axios.post(
        'http://localhost:4000/api/User/UserSignUp', {
          params: params
        }
      ).then((response) => {
        window.sessionStorage.setItem('USER_LOGGED', true);
        window.sessionStorage.setItem('USER_ID', response.data.userId.toString());
        window.sessionStorage.setItem('USER_NAME', params.name.toString() + " " + params.surname.toString());
        window.sessionStorage.setItem('USER_TYPE', params.userType.toString());
        document.location.href="/";
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
                type="password"
                id="repassword"
                autoComplete="current-password"
              />
              <FormLabel component="legend">Cinsiyet</FormLabel>
            <RadioGroup aria-label="userGender">
              <FormControlLabel value="1" control={<Radio id="girl"/>} label="Kız"/>
              <FormControlLabel value="0" control={<Radio />} label="Erkek" />
            </RadioGroup>
            <br/>
            <FormLabel component="legend">Kullanıcı Türü</FormLabel>
              <FormControlLabel
               control={<Checkbox value="1" color="primary" id="userType"/>}
               label="Uzman"
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
