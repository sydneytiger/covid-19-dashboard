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
      : iso;
  }
  
  const handleChange = (e, val) => {
    if(!val) return;
    dispatch({ type: 'SET_SEARCHING_COUNTRY_NAME', payload: val});
  }

  return (<>
    {countryNameList && <Autocomplete
          id="country-list"
          style={{width: '300px'}}
          options={countryNameList}
          autoHighlight
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
              label="Choose a country"
            />
          )}
          onChange={handleChange}/>
    }
  </>)
}

export default SearchCountry
