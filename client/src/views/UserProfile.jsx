import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {SquareUserCard} from './../components/UserCard';
import UserTabs from './../components/UserTabs';

export default function UserProfile(){
  return(
    <div className="UserProfile">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SquareUserCard/>
        </Grid>
        <Grid item xs={8}>
          <UserTabs/>
        </Grid>
      </Grid>
    </div>
  );
}
