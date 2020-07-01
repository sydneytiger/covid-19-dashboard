import React, { useContext } from 'react'
import {CovidContext} from './CovidApp';
import useCovidApi from '../../api/useCovidApi';
import { history } from '../../constaints';
import HistoryChart from './HistoryChart';
import '../../style/HistoryChartsCountry.css'

function HistoryChartsCountry() {
  const {state, dispatch} = useContext(CovidContext);
  const {selectedCountry, lastDays, historyData} = state;

  useCovidApi(`${history}${selectedCountry}`, {
    initialData: {},
    dataRefiner: data => dispatch({ type: 'SET_HISTORY_DATA', payload: data.timeline })
  });

  const handleLastDayChange = (e, key) => {
    dispatch({ type: 'SET_LAST_DAYS', key, payload: e.target.value })
  }

  const transformHistory = (timeline = {}) => {
    return Object.entries(timeline).map((entry) => {
      const [time, number] = entry;
      return { time, number };
    });
  }

  return (
    <div className="center">
      <h2>{selectedCountry} history data</h2>
      <div className=" history-group">
        <HistoryChart 
          dataKey="Cases" 
          data={transformHistory(historyData.cases)} 
          lastDays={lastDays.cases} 
          onLastDaysChange={e => handleLastDayChange(e, 'cases')} />

        <HistoryChart 
          dataKey="Deaths" 
          data={transformHistory(historyData.deaths)} 
          lastDays={lastDays.deaths} 
          onLastDaysChange={e => handleLastDayChange(e, 'deaths')} />
        
        <HistoryChart 
          dataKey="Recovered" 
          data={transformHistory(historyData.recovered)} 
          lastDays={lastDays.recovered} 
          onLastDaysChange={e => handleLastDayChange(e, 'recovered')} />
      </div>
    </div>
  )
}

export default HistoryChartsCountry
