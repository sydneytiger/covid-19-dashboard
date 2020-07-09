import React, {useEffect, useState} from 'react';
import { CircularProgress, Grid, Typography, TextField, AppBar, Tooltip } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import MoodBadTwoToneIcon from '@material-ui/icons/MoodBadTwoTone';
import AirlineSeatFlatTwoToneIcon from '@material-ui/icons/AirlineSeatFlatTwoTone';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';

import api from '../api/index';
import { ip_location_url } from '../constaints';
import { countries } from '../constaints';
import {countryCovideDataMapper, countryNameMapper} from '../utils/dataMapper';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 70,
    padding: '10px 0',
    textAlign: 'center'
  },
  flag: {
    width: 70,
    height: 40,
    borderRadius: 5,
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
    objectFit: 'fill'
  },
  countryList: {
    width: 300
  }
}));

function UserCountryCovidData() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [manualSet, setManualSet] = useState(false);
  const [covidData, setCovidData] = useState(null);
  const [countryList, setCountryList] = useState(null);

  useEffect(() => {
    api(ip_location_url)
    .then(resp => {
      loadLocationCovidData(resp.data.country);
    })
    .catch(() => {
      setManualSet(true);
      loadCountryList();
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  const loadLocationCovidData = location => {
    api(`${countries}${location}`)
    .then(resp => {
      setCovidData(countryCovideDataMapper(resp.data));
    })
    .finally(() => {
        setLoading(false);
      }
    );
  }

  const loadCountryList = () => {
    api(countries)
    .then(resp => {
      setCountryList(countryNameMapper(resp.data));
    });
  }

  const handleManualSet = () => {
    setManualSet(true);
    setCovidData(null);
    loadCountryList();
  }

  const dataView = data => {
    return (
      <Grid container justify="center" alignItems="center" spacing={5}>
        <Grid item><img src={data.flag} alt={data.country} className={classes.flag} /></Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
          <Grid item>
              <Typography variant="h6">TOTAL </Typography>
            </Grid>
            <Grid item>
              <AirlineSeatFlatTwoToneIcon fontSize="large" className="red"/>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="red">
                {data.cases.toLocaleString()}
              </Typography>
            </Grid>
            <Grid item>
              <MoodBadTwoToneIcon fontSize="large" className="gray" />
            </Grid>
            <Grid item>
              <Typography variant="h6" className="gray">
                {data.deaths.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h6">TODAY </Typography>
            </Grid>
            <Grid item>
              <AirlineSeatFlatTwoToneIcon fontSize="large" className="red"/>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="red">
                {data.todayCases.toLocaleString()}
              </Typography>
            </Grid>
            <Grid item>
              <MoodBadTwoToneIcon fontSize="large" className="gray" />
            </Grid>
            <Grid item>
              <Typography variant="h6" className="gray">
                {data.todayDeaths.toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item onClick={handleManualSet}>
            <HelpOutlineTwoToneIcon className="gray"/>
        </Grid>
      </Grid>
    )
  }

  const manualSetView = () => {
    return (
      <Autocomplete
        className={classes.countryList}
        id="user-country"
        options={countryList}
        autoHighlight
        freeSolo
        getOptionLabel={ option => option.name }
        renderOption={ option => option.name }
        renderInput={params => (
          <TextField 
            {...params}
            label="Please choose your country"
          />
        )}
        onChange={(e, val) => {
          setManualSet(false);
          setLoading(true);
          loadLocationCovidData(val.name)
        }}/>
    );
  }

  return (
    <AppBar position="sticky" color="default" className={classes.root}>
      { loading && <CircularProgress /> }
      { manualSet && manualSetView()}
      { covidData && dataView(covidData) }
    </AppBar>
  )
}

export default UserCountryCovidData
