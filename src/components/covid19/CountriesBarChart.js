import React, { useContext } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { CovidContext } from './CovidApp';
import useTopTenCountries from '../hooks/useTopTenCountries';

function CountriesBarChart({data, dataKey}) {
  const {dispatch} = useContext(CovidContext);

  useTopTenCountries();

  const onClick = selected => {
    dispatch({type: 'SET_COUNTRY', payload: selected.activeLabel});
  }

  return (
    <BarChart
      width={960}
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

export default CountriesBarChart
