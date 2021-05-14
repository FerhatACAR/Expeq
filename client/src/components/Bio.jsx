import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function Summary(props){
  return(
    <div className="Summary">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" className="Name">
            Eğitim
          </Typography>
          <p>{props.userInfo[0].userDetail[0].education}</p>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
    </div>
  );
}
