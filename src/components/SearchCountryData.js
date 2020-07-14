import React from 'react';
import { countries } from '../constaints';
import CovidCountryCard from './CovidCountryCard/CovidCountryCard';
import useCovidApi from '../hooks/useCovidApi';
import {countryCovideDataMapper} from '../utils/dataMapper';
import {Grid} from '@material-ui/core';

function SearchCountryData({coutryNameList}) {
  const data = useCovidApi(
    `${countries}${coutryNameList.join(',')}`, 
    { 
      initialData: null,
      dataRefiner:data => {
        data = countryCovideDataMapper(data);
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
