import React, {useEffect, useState} from 'react';
import { CircularProgress, Grid, Typography, TextField, AppBar } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
import MoodBadTwoToneIcon from '@material-ui/icons/MoodBadTwoTone';
import AirlineSeatFlatTwoToneIcon from '@material-ui/icons/AirlineSeatFlatTwoTone';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';

import api from '../../api/index';
import { ip_location_url } from '../../constaints';
import { countries } from '../../constaints';
import {countryCovidDataMapper, countryNameMapper} from '../../utils/dataMapper';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 70,
    padding: '10px 0',
    textAlign: 'center',
  },
  progress:{
    margin: 'auto'
  },
  flag: {
    width: 70,
    height: 40,
    borderRadius: 5,
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
    objectFit: 'fill'
  },
  countryList: {
    width: 300,
    margin: 'auto'
  }
}));

function UserCountryCovidData() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [manualSet, setManualSet] = useState(false);
  const [covidData, setCovidData] = useState(null);
  const [countryList, setCountryList] = useState(null);

  useEffect(() => {
    async function getLocation() {
      try{
        // get user location by ip
        const resp = await api(ip_location_url);

        // fetch covid data when user country is set
        await loadLocationCovidData(resp.data.country);
      } 
      catch(error) {
        try{
          console.log('object')
          await loadCountryList();
          setManualSet(true);
        } catch(error){
          console.log(`error when load country list ${error}`);
        }
      } 
      finally{
        setLoading(false);
      }
    }
    getLocation();
  }, []);

  const loadLocationCovidData = async location => {
    const resp = await api(`${countries}${location}`)
    setCovidData(countryCovidDataMapper(resp.data));
  }

  const loadCountryList = async () => {
    const resp = await api(countries)
    setCountryList(countryNameMapper(resp.data));
  }

  const handleManualSet = async () => {
    await loadCountryList();
    setManualSet(true);
    setCovidData(null);
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
              label="Please let me know where you are?"
            />
          )}
          onChange={async (e, val) => {
            setManualSet(false);
            setLoading(true);
            await loadLocationCovidData(val.name);
            setLoading(false);
          }}/>
    );
  }

  return (
    <AppBar position="sticky" color="default" className={classes.root}>
      { loading &&  <CircularProgress className={classes.progress} />}
      { manualSet && manualSetView()}
      { covidData && dataView(covidData) }
    </AppBar>
  )
}

export default UserCountryCovidData
