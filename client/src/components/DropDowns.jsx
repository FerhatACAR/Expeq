import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

 function CitySelect() {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="DropDown">
      <FormControl className="FormControl">
        <InputLabel className="DropDownLabel" htmlFor="age-native-simple">Şehir</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ankara</option>
          <option value={20}>İstanbul</option>
          <option value={30}>İzmir</option>
        </Select>
      </FormControl>
    </div>
  );
}

function ProfessionSelect() {
 const [state, setState] = React.useState({
   age: '',
   name: 'hai',
 });

 const handleChange = (event) => {
   const name = event.target.name;
   setState({
     ...state,
     [name]: event.target.value,
   });
 };

 return (
   <div className="DropDown">
     <FormControl className="FormControl">
       <InputLabel htmlFor="age-native-simple">Meslek</InputLabel>
       <Select
         native
         value={state.age}
         onChange={handleChange}
         inputProps={{
           name: 'age',
           id: 'age-native-simple',
         }}
       >
         <option aria-label="None" value="" />
         <option value={10}>Doktor</option>
         <option value={20}>Avukat</option>
         <option value={30}>Mühendis</option>
       </Select>
     </FormControl>
   </div>
 );
}

export {
  CitySelect,
  ProfessionSelect
}
