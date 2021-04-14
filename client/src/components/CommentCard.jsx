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

class Comment extends React.Component {
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
            <Grid item xs={2} className="PhotoArea">
              <div className="Details">
                <CardContent className="Content">
                  <Typography component="h5" variant="h5" className="Name">
                    Ferhat ACAR
                  </Typography>
                  <p className="Profession">
                    asdasdasdasd
                  </p>
                  <p className="Degree">
                    asdasdasdasdasdasdasd
                  </p>
                </CardContent>
              </div>
            </Grid>
            <Grid item xs={10} className="AdressArea">
              <div className="Details">
                <CardContent className="Content">
                  <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={8}>
                    </Grid>
                    <Grid item xs={12}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Grid>
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
