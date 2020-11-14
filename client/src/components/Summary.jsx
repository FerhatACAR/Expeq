import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default function Summary(){
  return(
    <div className="Summary">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" className="Name">
            Genel
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at accumsan leo. Maecenas at leo tristique, mattis dui in, hendrerit nisl.
             Duis at congue lacus, in imperdiet elit. Aliquam lobortis interdum neque nec tristique...
          </p>
          <Typography component="h5" variant="h5" className="Name">
            Biografi
          </Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at accumsan leo. Maecenas at leo tristique, mattis dui in, hendrerit nisl.
             Duis at congue lacus, in imperdiet elit. Aliquam lobortis interdum neque nec tristique...
          </p>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
      </Grid>
    </div>
  );
}
