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
import { Container, Typography, Grid } from '@material-ui/core';
import useWindowDimensions from '../hooks/useWindowDimensions';
import TopBar from './TopBar';
import { TopTenContext, topTenReducer, topTenInitState} from '../contexts/topTenContext';
import { SearchContext, searchReducer, searchInitState} from '../contexts/searchContext';

export function CovidApp() {
  const [topTenState, topTenDispatch] = useReducer(topTenReducer, topTenInitState);
  const [searchState, searchDispatch] = useReducer(searchReducer, searchInitState);
  
  const { searchCountry } = searchState;
  const {dataKey, selectedCountry, countryData} = topTenState;

  const globalData = useCovidApi(global, { initialData: {}});
  const userCountry = useLocationApi();
  const { width } = useWindowDimensions();
  const countriesChartProps = {
    data: countryData,
    dataKey: dataKey
  }

  return (
    <>
      <TopBar userCountry={userCountry} />
      <Container fixed>
        <Typography variant="h4" align="center" style={{ margin:" 20px 0"}}>Covide-19 Statistic</Typography>
        <GlobalStatistic data={globalData} />
      </Container>

      <TopTenContext.Provider value={{topTenState, topTenDispatch}}>
        <Container fixed>
          <DataKeyDropDown />
          <CountriesBarChart {...countriesChartProps} /> 
          { selectedCountry 
            ? <HistoryChartsCountry selectedCountry={selectedCountry}/>
            : <Typography variant="h5" align="center">Click on a country to show its history</Typography>
          }
        </Container>
      </TopTenContext.Provider>

      <SearchContext.Provider value={{searchState, searchDispatch}}>
        <Container fixed>
          <SearchCountry />          
          { searchCountry && searchCountry.length && 
          <SearchCountryData coutryNameList={searchCountry} /> }
        </Container>
      </SearchContext.Provider>
    </>
  )
}