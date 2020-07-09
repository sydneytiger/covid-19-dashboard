import React from 'react';

export const ucInitiState = {
  loading: true,
  country: null,
  data: null,
  isManuallySet: false,
  countryList: []
}

export const ucReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USER_COUNTRY':
      return {...state, country: action.payload, loading: false, isManuallySet: false };
    case 'SET_USER_COUNTRY_DATA':
      return {...state, data: action.payload, loading: false, isManuallySet: false}
    case 'SET_MANUALLY_SET':
      return {...state, isManuallySet: true};
    case 'SET_COUNTRY_LIST':
      return {...state, countryList: action.payload};
    case 'SET_LOADING':
      return {...state, loading: true};
    default:
      return state;
  }
}

export const UserCountryContext = React.createContext();