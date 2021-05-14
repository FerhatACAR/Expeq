import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import MainImage from '../assets/images/notebook-1280538_1920.jpg';
import { CitySelect, ProfessionSelect } from './DropDowns'

export default class MainSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRfCity: '',
      selectedRfProfession: ''
    }
    this.handleCallback = this.handleCallback.bind(this);
  }

  componentDidMount() {

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

  render() {
    return (
      <div className="MainPage">
        <img src={MainImage} alt="MainImage" className="Image" />
        <div className="DropDowns">
          <div className="DropDownsChild">
            <CitySelect parentCallback = {this.handleCallback}/>
          </div>
          <div className="DropDownsChild">
            <ProfessionSelect parentCallback = {this.handleCallback}/>
          </div>
          <div className="DropDownsChild">
            <Link to={`/SearchResult/${this.state.selectedRfCity}/${this.state.selectedRfProfession}`}>
              <Button
                variant="contained"
                className="Buttons"
                endIcon={<SearchIcon className="Icon" />}
                onClick = {this.handleClick}
              >
                Ara
               </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
