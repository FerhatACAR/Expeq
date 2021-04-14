import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Contact(props){
  return(
    <div className="Summary">
      <Grid container spacing={3}>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> {props.userInfo[0].userDetail[0].phone}</p>
        </Grid>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> {props.userInfo[0].userDetail[0].adress}</p>
        </Grid>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> {props.userInfo[0].email}</p>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
    </div>
  );
}
