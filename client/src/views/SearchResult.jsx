import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {ListUserCard} from './../components/UserCard';
import { Link } from 'react-router-dom';
import {CitySelect, ProfessionSelect} from './../components/DropDowns';
const axios = require('axios');

export default class SearchResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        selectedRfCity: '',
        selectedRfProfession: ''
      }
      this.fetchData = this.fetchData.bind(this);
      this.handleCallback = this.handleCallback.bind(this);
    }

    componentDidMount() {
      this.fetchData(this);
    }

    handleCallback(selectedData, type) {
      if (type == '1') {
        this.setState({
          selectedRfCity: new String(selectedData)
        })
      } else {
        this.setState({
          selectedRfProfession: new String(selectedData)
        })
      }
    };

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
          {this.state.users.map((user) => <ListUserCard key={user} user = {user} />)}
          </Grid>
          <Grid item xs={4} className="SideBar">
            <Grid container spacing={1}>
              <Grid item xs={12} className="DropDown">
                <ProfessionSelect parentCallback = {this.handleCallback}/>
              </Grid>
              <Grid item xs={12} className="DropDown">
                <CitySelect parentCallback = {this.handleCallback}/>
              </Grid>
              <Grid item xs={12} className="Search">
              <Link to={`/SearchResult/${this.state.selectedRfCity}/${this.state.selectedRfProfession}`}>
                <Button
                 variant="contained"
                 className="Buttons SearchButton"
                 endIcon={<SearchIcon className="Icon" />}
                 onClick = {this.handleClick}
                >
               Ara
              </Button>
              </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
