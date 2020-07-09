import React, { useContext } from 'react'
import useTopTenCountries from '../hooks/useTopTenCountries';

function CountriesPieChar({data, dataKey}) {
  useTopTenCountries();

  return (
    <div>
      CountriesPieChart
    </div>
  )
}

export default CountriesPieChar
