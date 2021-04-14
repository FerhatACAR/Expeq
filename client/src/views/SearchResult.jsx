import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {ListUserCard} from './../components/UserCard';
import {CitySelect, ProfessionSelect} from './../components/DropDowns';
const axios = require('axios');

export default class SearchResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      }
      this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
      this.fetchData(this);
    }

    fetchData() {
      let result;
      let params = {
        rfCity: this.props.match.params.rfCity,
        rfProfession: this.props.match.params.rfProfession
      };

      axios.get(
        'http://localhost:4000/api/Shared/getUsersBySelected', {
          params: params
        }
      ).then((response) => {
        this.setState({
          users: response.data
        })
      }).catch((error) => {
        console.log(error);
      });
    };

  render() {
    return(
      <div className="SearchResult">
        <Grid container spacing={3}>
          <Grid item xs={8} className="CardList">
          {this.state.users.map((user) => <ListUserCard user = {user} />)}
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
}
