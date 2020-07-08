import React, { useReducer } from 'react'
import useCovidApi from '../hooks/useCovidApi';
import { global } from '../constaints';
import DataKeyDropDown from './DataKeyDropDown';
import CountriesBarChart from './CountriesBarChart';
import CountriesPieChar from './CountriesPieChar';
import GlobalStatistic from './GlobalStatistic';
import HistoryChartsCountry from './HistoryChartsCountry';
import SearchCountry from './SearchCountry';
import useLocationApi from '../hooks/useLocationApi';
import SearchCountryData from './SearchCountryData';
import { Container, Typography } from '@material-ui/core';
import useWindowDimensions from '../hooks/useWindowDimensions';
import TopBar from './TopBar';

const initState = {
  dataKey: 'cases',
  searchCountry: [],
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
    case 'SET_SEARCHING_COUNTRY_NAME':
      return { ...state, searchCountry: [...action.payload] }
    case 'ERROR':
      return { ...state, error: action.payload };
    default: 
      return state;
  }
}

export const CovidContext = React.createContext();

export function CovidApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const {dataKey, selectedCountry, countryData, searchCountry} = state;
  const globalData = useCovidApi(global, { initialData: {}});
  const userCountry = useLocationApi();
  const { width } = useWindowDimensions();
  const countriesChartProps = {
    data: countryData,
    dataKey: dataKey
  }

  return (
    <CovidContext.Provider value={{ state, dispatch}} >
      <TopBar userCountry={userCountry} />
      <Container fixed>
        <Typography variant="h4" align="center" style={{ margin:" 20px 0"}}>Covide-19 Statistic</Typography>
        <GlobalStatistic data={globalData} />
        <DataKeyDropDown />
        { width && width > 768
          ? <CountriesBarChart {...countriesChartProps} /> 
          : <CountriesPieChar {...countriesChartProps} />
        }
        {selectedCountry ? 
          <HistoryChartsCountry selectedCountry={selectedCountry}/>
          : <Typography variant="h5" align="center">Click on a country to show its history</Typography>
        }
        <SearchCountry />
        {/* { userCountry && <UserCountryData userCountry={userCountry}></UserCountryData> } */}
        { searchCountry.length && <SearchCountryData coutryNameList={searchCountry} /> }
      </Container>
    </CovidContext.Provider>
  )
}