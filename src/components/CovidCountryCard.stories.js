import React from 'react';
import CovidCountryCard from './CovidCountryCard';

export default {
  title: 'CovidCountryCard',
  component: CovidCountryCard
}

const defaultData = {
  updated:1594205402819,
  country:"Australia",
  iso2:"AU",
  iso3:"AUS",
  flag:"https://disease.sh/assets/img/flags/au.png",
  cases:8886,
  todayCases:131,
  deaths:106,
  todayDeaths:0,
  recovered:7487,
  todayRecovered:32,
  active:1293,
  critical:8,
  tests:2853342,
  population:25504621
}

export const Default = () => <CovidCountryCard data={defaultData} />;
