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

import Macmiller from './../assets/images/Mac-Miller-press-by-G-L-Askew-II-billboard-1548-compressed.jpg';

class ListUserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="Card">
        <Card className="FirstRow">
          <CardMedia
            className="Cover"
            image={Macmiller}
            title="Live from space album cover"
          />
          <Grid container spacing={3}>
            <Grid item xs={4} className="PhotoArea">
              <div className="Details">
                <CardContent className="Content">
                  <Typography component="h5" variant="h5" className="Name">
                    {this.props.user.user[0].name} {this.props.user.user[0].surname}
                  </Typography>
                  <p className="Profession">
                    {this.props.user.profession[0].name}
                  </p>
                  <p className="Degree">
                    {this.props.user.degree}
                  </p>
                </CardContent>
              </div>
            </Grid>
            <Grid item xs={8} className="AdressArea">
              <div className="Details">
                <CardContent className="Content">
                  <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                      <Link to={`/UserProfile/${this.props.user.user[0]._id}`}><Button
                        variant="contained"
                        className="Buttons CallButton"
                        endIcon={<VisibilityIcon className="Icon" />}
                      >
                        Ziyaret Et
                       </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12}><p>{this.props.user.adress}</p></Grid>
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
                  <p>{this.props.user.summary}</p>
                </CardContent>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

class SquareUserCard extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      
    }

  render() {
    return (
      <Card className="SquareUserCard">
        <CardMedia
          component="img"
          className="Cover"
          image={Macmiller}
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography component="h5" variant="h5" className="Name">
                    {this.props.userInfo[0].name} {this.props.userInfo[0].surname}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <p className="Profession" style={{ marginRight: 10 }}>
                    {this.props.userInfo[0].userDetail[0].profession}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <p className="Degree">
                    {this.props.userInfo[0].userDetail[0].degree}
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.userInfo[0].userDetail[0].summary}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="CardActions">
          <Button
            variant="contained"
            className="Buttons"
            endIcon={<SendIcon className="Icon" />}
          >
            e-Mail Gönder
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export {
  ListUserCard,
  SquareUserCard
}
