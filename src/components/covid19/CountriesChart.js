import React, { useContext } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { CovidContext } from './CovidApp';
import { countries } from '../../constaints';
import useCovidApi from '../../api/useCovidApi';

function CountriesChart({data, dataKey}) {
  const {state, dispatch} = useContext(CovidContext);

  useCovidApi(`${countries}?sort=${state.dataKey}`, {
    initialData: [],
    dataRefiner: data => { 
      dispatch({ type: 'SET_COUNTRY_DATA', payload: data.slice(0, 10) });
      const countries = extracAllCountries(data);
      dispatch({ type: 'SET_COUNTRY_NAME_LIST', payload: countries });
    }
  });

  const extracAllCountries = data => {
    const arr = [];
    for(let item of data) {
      arr.push(item.country);
    }
    return arr;
  }

  const onClick = selected => {
    dispatch({type: 'SET_COUNTRY', payload: selected.activeLabel});
  }

  return (
    <BarChart
      width={1200}
      height={250}
      style={{ margin: "auto" }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
      onClick={onClick}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='country' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill='#1B4F72' />
      </BarChart>
  )
}

export default CountriesChart
