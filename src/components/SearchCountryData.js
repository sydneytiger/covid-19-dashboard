import React from 'react';
import { countries } from '../constaints';
import CovidCountryCard from './CovidCountryCard';
import useCovidApi from '../hooks/useCovidApi';
import { Typography, Grid } from '@material-ui/core';
import {countryDataMapper} from '../utils/dataMapper';

function SearchCountryData({coutryNameList}) {
  const data = useCovidApi(
    `${countries}${coutryNameList.join(',')}`, 
    { 
      initialData: null,
      dataRefiner:data => {
        data = countryDataMapper(data);
        if(!Array.isArray(data)) return [data];
        return data;
    }
  });

  if(data && data.length){
    return (
      <Grid container justify="flex-start" alignItems="center" spacing={5}>
        {data.map(item => <Grid item key={item.iso2} xs={3}><CovidCountryCard data={item} /></Grid>)}
      </Grid>
    )
  }
  return null;
}

export default SearchCountryData