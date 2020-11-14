import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Contact(){
  return(
    <div className="Summary">
      <Grid container spacing={3}>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> +90 537 987 1849</p>
        </Grid>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> acar_ferhat@outlook.com</p>
        </Grid>
        <Grid item xs={12} className="Row">
          <p><PhoneIcon className="Icon" /> Sakarya Üniversitesi Esentepe Kampüsü Kemalpaşa Mahallesi Üniversite Caddesi 54050 Serdivan / SAKARYA</p>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
    </div>
  );
}
