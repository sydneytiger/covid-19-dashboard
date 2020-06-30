import React, {useReducer, useEffect} from 'react'
import useCovidApi from '../../api/useCovidApi';
import { global} from '../../constaints';
import Title from '../Title';
import DataKeyDropDown from './DataKeyDropDown';
import CountriesChart from './CountriesChart';

const initState = {
  dataKey: 'cases',
  selectedCountry: '',
  data: [],
  error: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_DATAKEY': 
      return { ...state, dataKey: action.payload }
    case 'SET_COUNTRY':
      console.log('Seleced country is: ', action.payload)
      return { ...state, selectedCountry: action.payload }
    case 'ERROR':
      return { ...initState, error: action.payload, loading: false };
    default: 
      return state;
  }
}

export const CovidContext = React.createContext();

export function CovidApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const globalData = useCovidApi(global, { initialData: {}});
  
  return (
    <>
      <Title text="Covide-19 Statistic" />
      <CovidContext.Provider value={{ state, dispatch}} >
        <DataKeyDropDown />
        <CountriesChart data={state.data} dataKey={state.dataKey} />
        {globalData.cases}
      </CovidContext.Provider>
    </>
  )
}

