import React from 'react';
import { countries } from '../../constaints';
import CovidCountryCard from './CovidCountryCard';
import useCovidApi from '../../api/useCovidApi';


function UserCountryData({userCountry}) {
  const data = useCovidApi(`${countries}${userCountry}`, { initialData: null });

  return  (
    <>
      { data && <h2 className="center">Covid in your country</h2>}
      <div className="grid">
        { data && <CovidCountryCard data={data} /> }
      </div>
    </>
  )
}

export default UserCountryData
