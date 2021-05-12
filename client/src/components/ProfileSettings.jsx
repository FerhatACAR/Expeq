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
import {CitySelect, ProfessionSelect} from './../components/DropDowns';
const axios = require('axios');


export default class ProfileSettings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSuccesful: '0',
        selectedRfCity: '',
        selectedRfProfession: '',
        rfUserDetail: ''
      }
      this.postUserDetailsHandler = this.postUserDetailsHandler.bind(this);
      this.handleCallback = this.handleCallback.bind(this);
      this.fetchUserData = this.fetchUserData.bind(this);
    }

    componentDidMount() {
      this.fetchUserData();
    }

    handleCallback(selectedData, type) {
      if (type == '1') {
        this.setState({
          selectedRfCity: new String(selectedData)
        })
      } else {
        this.setState({
          selectedRfProfession: new String(selectedData)
        })
      }
    };

    fetchUserData() {
      let result;
      let params = {
        userId: '60578a18f76ed1d6c1395ef3'
      };

      axios.get(
        'http://localhost:4000/api/User/GetUserById', {
          params: params
        }
      ).then((response) => {
        this.setState({
          rfUserDetail: response.data[0].rfUserDetail
        });
      }).catch((error) => {
        console.log(error);
      });
    };

    postUserDetailsHandler(e) {
      e.preventDefault();
      let result;
      let params = {
        degree: document.getElementById("degree").value,
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
        address: document.getElementById("address").value,
        summary: document.getElementById("summary").value,
        bio: document.getElementById("bio").value,
        education: document.getElementById("education").value,
        _id: this.state.rfUserDetail,
        rfProfession: this.state.selectedRfProfession,
        rfCity: this.state.selectedRfCity
      };

      axios.post(
        'http://localhost:4000/api/User/EditUserDetail', {
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
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
          <div className="Paper">
            <form className="Form" noValidate>
            <Grid container component="main" >
              <Grid xs={6} sm={6} md={6}>
                <ProfessionSelect parentCallback = {this.handleCallback}/>
              </Grid>
              <Grid xs={6} sm={6} md={6}>
                <CitySelect parentCallback = {this.handleCallback}/>
              </Grid>
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="degree"
              label="Derece"
              name="degree"
              autoComplete="degree"
              autoFocus
            />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Telefon"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="website"
                label="Web Site"
                name="website"
                autoComplete="website"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                className="address"
                label="Adres"
                placeholder="Placeholder"
                multiline
                rows={3}
              />
            </form>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
          <div className="Paper">
            <form className="Form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="summary"
              className="summary"
              label="Özet"
              placeholder="Placeholder"
              multiline
              rows={2}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="bio"
              className="bio"
              label="Bio"
              placeholder="Placeholder"
              multiline
              rows={3}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="education"
              className="education"
              label="Eğitim"
              placeholder="Placeholder"
              multiline
              rows={6}
            />
            <Link to={"/"}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="SubmitButton"
                onClick = {this.postUserDetailsHandler}
              >
                Kaydet
              </Button>
            </Link>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
