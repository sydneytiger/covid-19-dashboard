import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function GlobalStatistic({ data }) {
  const {cases, active, deaths, recovered, updated} = data;
  return (
    <>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Updated on {new Date(updated).toLocaleString()}
      </Typography>
      <Grid container justify="center" spacing={5} style={{fontSize:"24px"}}>
        <Grid item ms={3}>Cases:<span className="red">{new Intl.NumberFormat().format(cases)}</span></Grid>
        <Grid item ms={3}>Deaths: <span className="gray">{new Intl.NumberFormat().format(deaths)}</span></Grid>
        <Grid item ms={3}>Active: <span className="orange">{new Intl.NumberFormat().format(active)}</span></Grid>
        <Grid item ms={3}>Recovered: <span className="green">{new Intl.NumberFormat().format(recovered)}</span></Grid>
      </Grid>
    </>
  )
}

export default GlobalStatistic
