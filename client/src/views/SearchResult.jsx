import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {ListUserCard} from './../components/UserCard';
import {CitySelect, ProfessionSelect} from './../components/DropDowns';

export default function SearchResult(){
  return(
    <div className="SearchResult">
      <Grid container spacing={3}>
        <Grid item xs={8} className="CardList">
          {/*Buraya veritabanından gelecek tabi ona göre ayarlanacak*/}
          <ListUserCard/>
          <ListUserCard/>
          <ListUserCard/>
          <ListUserCard/>
        </Grid>
        <Grid item xs={4} className="SideBar">
          <Grid container spacing={0.2}>
            <Grid item xs={12} className="DropDown">
              <ProfessionSelect/>
            </Grid>
            <Grid item xs={12} className="DropDown">
              <CitySelect/>
            </Grid>
            <Grid item xs={12} className="Search">
              <Button
               variant="contained"
               className="Buttons SearchButton"
               endIcon={<SearchIcon className="Icon" />}
              >
               Ara
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
