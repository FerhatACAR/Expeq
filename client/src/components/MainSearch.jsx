import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import MainImage from '../assets/images/notebook-1280538_1920.jpg';
import { CitySelect, ProfessionSelect } from './DropDowns'

 
export default function MainSearch(props) {

  return (
    <div className="MainPage">
      <img src={MainImage} alt="MainImage" className="Image" />
      <div className="DropDowns">
        <div className="DropDownsChild">
          <CitySelect />
        </div>
        <div className="DropDownsChild">
          <ProfessionSelect />
        </div>
        <div className="DropDownsChild">
          <Link to={"/SearchResult"}>
            <Button
              variant="contained"
              className="Buttons"
              endIcon={<SearchIcon className="Icon" />}
            >
              Ara
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
