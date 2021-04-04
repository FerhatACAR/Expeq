import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

class CitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange(event) {
    this.props.parentCallback(event.target.value, '1');
    event.preventDefault();
  };

  fetchData() {
    fetch("http://localhost:4000/api/Shared/GetCities")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            cities: result
          });
        },
        (error) => {
          console.log(error)
        }
      )
  };

  render() {
    return (
        <div className="DropDown">
          <FormControl className="FormControl">
            <InputLabel className="DropDownLabel" htmlFor="age-native-simple">Şehir</InputLabel>
            <Select
              native
              onChange={this.handleChange}
            >
              <option aria-label="None" value="" />
            {this.state.cities.map((city) => <option value={city._id}>{city.name}</option>)}
            </Select>
          </FormControl>
        </div>
      );
  }
}

class ProfessionSelect extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    professions: []
  }
  this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
  this.fetchData();
}

handleChange(event) {
  this.props.parentCallback(event.target.value, '0');
  event.preventDefault();
};

fetchData() {
  fetch("http://localhost:4000/api/Shared/GetProfessions")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          professions: result
        });
      },
      (error) => {
        console.log(error)
      }
    )
};

  render() {
    return (
        <div className="DropDown">
          <FormControl className="FormControl">
            <InputLabel className="DropDownLabel" htmlFor="age-native-simple">Meslek</InputLabel>
            <Select
              native
              onChange={this.handleChange}
            >
              <option aria-label="None" value="" />
            {this.state.professions.map((profession) => <option value={profession._id}>{profession.name}</option>)}
            </Select>
          </FormControl>
        </div>
      );
  }
}


export {
  CitySelect,
  ProfessionSelect
}
