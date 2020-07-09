import React, { useContext } from 'react'
import { TopTenContext } from '../contexts/topTenContext';
import useCovidApi from '../hooks/useCovidApi';
import { history } from '../constaints';
import HistoryChart from './HistoryChart';
import { Grid, Typography } from '@material-ui/core';

function HistoryChartsCountry() {
  const {topTenState, topTenDispatch} = useContext(TopTenContext);
  const {selectedCountry, lastDays, historyData} = topTenState;

  useCovidApi(`${history}${selectedCountry}`, {
    initialData: {},
    dataRefiner: data => topTenDispatch({ type: 'SET_HISTORY_DATA', payload: data.timeline })
  });

  const handleLastDayChange = (val, key) => {
    topTenDispatch({ type: 'SET_LAST_DAYS', key, payload: val })
  }

  const transformHistory = (timeline = {}) => {
    return Object.entries(timeline).map((entry) => {
      const [time, number] = entry;
      return { time, number };
    });
  }

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
          {selectedCountry} history data
      </Typography>
      <Grid container justify="center" spacing={5} style={{marginTop:"10px"}}>
        <HistoryChart 
          dataKey="Cases" 
          data={transformHistory(historyData.cases)} 
          lastDays={lastDays.cases} 
          onLastDaysChange={(e, val) => handleLastDayChange(val, 'cases')} />
        
        <HistoryChart 
          dataKey="Deaths" 
          data={transformHistory(historyData.deaths)} 
          lastDays={lastDays.deaths} 
          onLastDaysChange={(e, val) => handleLastDayChange(val, 'deaths')} />
        
        <HistoryChart 
          dataKey="Recovered" 
          data={transformHistory(historyData.recovered)} 
          lastDays={lastDays.recovered} 
          onLastDaysChange={(e, val) => handleLastDayChange(val, 'recovered')} />
      </Grid>
    </>
  )
}

export default HistoryChartsCountry
