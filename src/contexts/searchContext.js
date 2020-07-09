import React from 'react';

export const searchInitState = {
  selectedCountry: '',
  countryNameList: null
}

export const searchReducer = (state, action) => {
  switch(action.type) {
    case 'SET_COUNTRY_NAME_LIST':
      return { ...state,  countryNameList: action.payload }
    case 'SET_SEARCHING_COUNTRY_NAME':
      return { ...state, searchCountry: [...action.payload] }
    default: 
      return state;
  }
}

export const SearchContext = React.createContext();