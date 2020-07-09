import React, { useContext } from 'react'
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { SearchContext } from '../contexts/searchContext';
import useCovidApi from '../hooks/useCovidApi';
import { countries } from '../constaints';
import {countryNameMapper} from '../utils/dataMapper';

function SearchCountry() {
  const { searchState, searchDispatch } = useContext(SearchContext);
  const { countryNameList } = searchState;

  useCovidApi(countries, {
    initialData: [],
    dataRefiner: data => { 
      const countries = countryNameMapper(data);
      searchDispatch({ type: 'SET_COUNTRY_NAME_LIST', payload: countries });
    }
  });

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
    searchDispatch({ type: 'SET_SEARCHING_COUNTRY_NAME', payload: countryList});
  }

  return (
    <div style={{marginBottom:30}}>
      {countryNameList && <Autocomplete
            id="country-list"
            fullWidth
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
                label="Search Country"
              />
            )}
            onChange={handleChange}/>
      }
    </div>
  )
}

export default SearchCountry
