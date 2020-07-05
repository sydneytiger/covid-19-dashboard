import React, { useContext } from 'react'
import { CovidContext } from './CovidApp';
import useTopTenCountries from '../hooks/useTopTenCountries';

function CountriesPieChar({data, dataKey}) {
  const {dispatch} = useContext(CovidContext);
  useTopTenCountries();

  return (
    <div>
      CountriesPieChart
    </div>
  )
}

export default CountriesPieChar
