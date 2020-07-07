import React from 'react';
import { countries } from '../../constaints';
import CovidCountryCard from './CovidCountryCard';
import useCovidApi from '../../api/useCovidApi';
import { Typography, Grid } from '@material-ui/core';


function SearchCountryData({coutryNameList}) {
  const data = useCovidApi(
    `${countries}${coutryNameList.join(',')}`, 
    { 
      initialData: null,
      dataRefiner:data => {
        if(!Array.isArray(data)) return [data];
        return data;
      }
    });

  if(data && data.length){
    return (
      <>
        <Typography variant="h4" align="center" gutterBottom>
          Search Country
        </Typography>
        <Grid container justify="flex-start" spacing={5}>
          {data.map(item => <Grid item key={item.countryInfo.iso2}><CovidCountryCard data={item} /></Grid>)}
        </Grid>
      </>
    )
  }
  return null;
}

export default SearchCountryData
