import React, {useReducer } from 'react'
import useCovidApi from '../../api/useCovidApi';
import { global } from '../../constaints';
import Title from '../Title';
import DataKeyDropDown from './DataKeyDropDown';
import CountriesChart from './CountriesChart';
import GlobalStatistic from './GlobalStatistic';
import HistoryChartsCountry from './HistoryChartsCountry';
import useLocationApi from '../../api/useLocationApi';
import '../../style/Covid19.css';
import UserCountryData from './UserCountryData';

const initState = {
  dataKey: 'cases',
  countryNameList: null,
  selectedCountry: '',
  countryData: [],
  historyData:{},
  error: null, 
  lastDays: {
    cases: 30,
    deaths: 30,
    recovered: 30
  }
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_COUNTRY_DATA':
      return { ...state, countryData: action.payload };
    case 'SET_DATAKEY': 
      return { ...state, dataKey: action.payload }
    case 'SET_COUNTRY':
      return { ...state, selectedCountry: action.payload }
    case 'SET_HISTORY_DATA':
      return { ...state, historyData: action.payload }
    case 'SET_LAST_DAYS': 
      return { ...state, lastDays: {...state.lastDays, [action.key]: action.payload }}
    case 'SET_COUNTRY_NAME_LIST':
      return { ...state,  countryNameList: action.payload }
    case 'ERROR':
      return { ...state, error: action.payload };
    default: 
      return state;
  }
}

export const CovidContext = React.createContext();

export function CovidApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const {dataKey, selectedCountry, countryData} = state;
  const globalData = useCovidApi(global, { initialData: {}});
  const userCountry = useLocationApi();

  return (
    <>
      <Title text="Covide-19 Statistic" />
      <GlobalStatistic data={globalData} />
      <CovidContext.Provider value={{ state, dispatch}} >
        <DataKeyDropDown />
        <CountriesChart data={countryData} dataKey={dataKey} />
        {selectedCountry ? 
          <HistoryChartsCountry selectedCountry={selectedCountry}/>
          : <div className="center"><h3>Click on a country to show its history.</h3></div>
        }
        {
          userCountry && <UserCountryData userCountry={userCountry}></UserCountryData>
        }
        
      </CovidContext.Provider>
    </>
  )
}