import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {SquareUserCard} from './../components/UserCard';
import UserTabs from './../components/UserTabs';
const axios = require('axios');

export default class UserProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userDetails: [],
        isLoaded: '0'
      }
      this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
      this.fetchData(this);
    }

    fetchData() {
      let result;
      let params = {
        userId: this.props.match.params.userId
      };

      axios.get(
        'http://localhost:4000/api/User/GetUserById', {
          params: params
        }
      ).then((response) => {
        this.setState({
          userDetails: response.data,
          isLoaded: '1'
        });
      }).catch((error) => {
        console.log(error);
      });
    };

  render() {
    return(
      (this.state.isLoaded == '1') ? <div className="UserProfile">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <SquareUserCard userInfo={this.state.userDetails}/>
          </Grid>
          <Grid item xs={8}>
            <UserTabs userInfo={this.state.userDetails}/>
          </Grid>
        </Grid>
      </div>:<div></div>
    );
  }
}
