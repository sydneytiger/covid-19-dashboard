import React from 'react';

export const topTenInitState = {
  dataKey: 'cases',
  selectedCountry: '',
  countryData: [],
  historyData:{},
  lastDays: {
    cases: 30,
    deaths: 30,
    recovered: 30
  }
}

export const topTenReducer = (state, action) => {
  switch(action.type) {
    case 'SET_COUNTRY_DATA':
      return { ...state, countryData: action.payload };
    case 'SET_DATAKEY': 
      return { ...state, dataKey: action.payload }
    case 'SET_COUNTRY':
      return { ...state, selectedCountry: action.payload };
    case 'SET_HISTORY_DATA':
        return { ...state, historyData: action.payload }
    case 'SET_LAST_DAYS': 
        return { ...state, lastDays: {...state.lastDays, [action.key]: action.payload }}
    default: 
      return state;
  }
}

export const TopTenContext = React.createContext();