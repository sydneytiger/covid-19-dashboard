import React, { useContext } from 'react'
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { CovidContext } from './CovidApp';

function SearchCountry() {
  const { state, dispatch } = useContext(CovidContext);
  const { countryNameList } = state;
  const countryFlag = iso => {
    return typeof String.fromCodePoint !== 'undefined'
      ? iso.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : '';
  }
  
  const handleChange = (e, val) => {
    if(!val) return;
    const countryList = []
    for(let country of val){
      countryList.push(country.name);
    }
    dispatch({ type: 'SET_SEARCHING_COUNTRY_NAME', payload: countryList});
  }

  return (<>
    {countryNameList && <Autocomplete
          id="country-list"
          style={{width: '300px'}}
          options={countryNameList}
          autoHighlight
          multiple
          freeSolo
          getOptionLabel={option => option.name}
          renderOption={option => ( 
            <React.Fragment>
              <span>{countryFlag(option.code)}</span>
              {option.name}
            </React.Fragment>
          )}
          renderInput={params => (
            <TextField 
              {...params}
              label="Choose counties"
            />
          )}
          onChange={handleChange}/>
    }
  </>)
}

export default SearchCountry
