import React, {useState, useEffect} from 'react';
import {countries} from '../constaints';

import CovidCountryCard from './CovidCountryCard';

function HookCovid19World({selectedCountry = ''}) {
  const [country] = useState(selectedCountry);
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    getDataForWorldwide();
  }, []);

  const getDataForWorldwide = () => {
    window.api.get(`${countries}${country}`)
    .then( resp => {
      let {data} = resp;
      data = Array.isArray(resp.data) ? resp.data : [resp.data];
      data = data.sort((a, b) => b.cases - a.cases).slice(0, 12);
      setStatistic(data.sort((a, b) => b.cases - a.cases));
    });
  }

  return (
    <div className="container">
      {
        statistic.map(item => <div key={item.countryInfo.iso3}>
          <CovidCountryCard data={item} /> </div>)
      }
    </div>
  )
}

export default HookCovid19World
