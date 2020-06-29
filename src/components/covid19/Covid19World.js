import React, {useReducer, useEffect} from 'react'
import CovidCountryCard from './CovidCountryCard';
import {countries} from '../../constaints';
import Title from '../Title';

function Covid19World({selectedCountry = ''}) {
  const initState = {
    loading: true,
    data: [],
    error: null
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'SUCCESS':
        return { ...initState, data: action.payload, loading: false };
      case 'ERROR':
        return { ...initState, error: action.payload, loading: false };
      default: 
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    window.api(`${countries}${selectedCountry}`)
    .then( resp => {
      let {data} = resp;
      data = Array.isArray(resp.data) ? resp.data : [resp.data];
      data = data.sort((a, b) => b.cases - a.cases).slice(0, 12);
      dispatch({
        type: 'SUCCESS',
        payload: data
      })
    })
    .catch( err => {
      dispatch({
        type: 'ERROR',
        payload: err.message
      })
    })
  }, []);

  return (
    <>
      <Title text="Covide-19 Statistic Worldwide"></Title>
      <div className="container">
        {
          state.error || state.data.map(item => <div key={item.countryInfo.iso3}>
            <CovidCountryCard data={item} /></div>)
        }
      </div>
    </>
  )
}

export default Covid19World
