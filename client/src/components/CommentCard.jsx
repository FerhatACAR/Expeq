import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom'
import BoyPP from '../assets/images/boypp.jpg';
import GirlPP from '../assets/images/girlpp.jpg';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: BoyPP
    }
  }

  componentDidMount() {
    if(this.props.comment.user[0].userGender == "1"){
      this.setState({gender: GirlPP})
    }
  }

  render() {
    return (
      <div className="Card">
        <Card className="FirstRow">
          <img
            className="Cover"
            src={"http://localhost:9001/" + this.state.gender}
            title="Live from space album cover"
          />
          <Grid container spacing={3}>
            <Grid item xs={3} className="PhotoArea">
              <div className="Details">
                <CardContent className="Content">
                  <Typography component="h5" variant="h5" className="Name">
                    {this.props.comment.user[0].name} {this.props.comment.user[0].surname}
                  </Typography>
                  <p className="Profession">
                    Bilgisayar Mühendisi
                  </p>
                  <p className="Degree">
                    {this.props.comment.user[0].degree}
                  </p>
                </CardContent>
              </div>
            </Grid>
            <Grid item xs={7} className="AdressArea">
              <div className="Details">
                <CardContent className="Content">
                  <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                    </Grid>
                    <Grid item xs={12}><p>{this.props.comment.message}</p></Grid>
                  </Grid>
                </CardContent>
              </div>
            </Grid>
          </Grid>
        </Card>
        <Card className="SecondRow">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="Details">
                <CardContent className="Content">
                </CardContent>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export {
  Comment
}
