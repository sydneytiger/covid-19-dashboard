import React from 'react';
import { Typography, AppBar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoodBadTwoToneIcon from '@material-ui/icons/MoodBadTwoTone';
import AirlineSeatFlatTwoToneIcon from '@material-ui/icons/AirlineSeatFlatTwoTone';
import useCovidApi from '../hooks/useCovidApi';
import { countries } from '../constaints';
import {countryDataMapper} from '../utils/dataMapper';

const useStyles = makeStyles({
  root: {
    minHeight: 65,
    paddingTop: 10,
    paddingBottom: 10
  },
  flag: {
    width: 70,
    height: 40,
    borderRadius: 5,
    boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
    objectFit: 'fill'
  },
});

function TopBar({userCountry}) {
  const classes = useStyles();
  const data = useCovidApi(
    `${countries}${userCountry}`, 
    { 
      initialData: null,
      dataRefiner: countryDataMapper
    });

  return (
    <AppBar position="sticky" color="default" className={classes.root}>
      { data ?
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
          </Grid>
        : <Typography variant="h6" align="center" className="red">
            TODO: use should be able to select a country when IP and geocode cannot work it out
          </Typography>
      }
    </AppBar>
  )
}

export default TopBar
