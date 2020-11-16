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

function ListUserCard() {
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
                  Mac Miller
                </Typography>
                <p className="Profession">
                  Bilgisayar Mühendisi
                </p>
                <p className="Degree">
                  Ekip Lideri
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
                    <Link to={"/UserProfile"}><Button
                      variant="contained"
                      className="Buttons CallButton"
                      endIcon={<VisibilityIcon className="Icon" />}
                    >
                      Ziyaret Et
                     </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12}><p>Sakarya Üniversitesi Esentepe Kampüsü Kemalpaşa Mahallesi Üniversite Caddesi 54050 Serdivan / SAKARYA</p></Grid>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed at accumsan leo. Maecenas at leo tristique, mattis dui in, hendrerit nisl.
                  Duis at congue lacus, in imperdiet elit. Aliquam lobortis interdum neque nec tristique...
                </p>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

function SquareUserCard() {
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
                  Mac Miller
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <p className="Profession" style={{ marginRight: 10 }}>
                  Bilgisayar Mühendisi
                </p>
              </Grid>
              <Grid item xs={6}>
                <p className="Degree">
                  Ekip Lideri
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed at accumsan leo. Maecenas at leo tristique, mattis dui in, hendrerit nisl.
              Duis at congue lacus, in imperdiet elit. Aliquam lobortis interdum neque nec tristique...
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

export {
  ListUserCard,
  SquareUserCard
}
