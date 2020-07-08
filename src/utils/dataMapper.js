export const countryDataMapper = data => {
  if(!Array.isArray(data)) return _countryDataMapper(data);
  
  const result = [];
  for(let item of data){
    result.push(_countryDataMapper(item));
  }

  return result;
}

const _countryDataMapper = data => {
  return {
    country: data.country,
    iso2: data.countryInfo.iso2,
    iso3: data.countryInfo.iso3,
    flag: data.countryInfo.flag,
    cases:data.cases,
    todayCases:data.todayCases,
    deaths:data.deaths,
    todayDeaths:data.todayDeaths,
    recovered:data.recovered,
    todayRecovered:data.todayRecovered,
    active:data.active,
    critical:data.critical,
    tests:data.tests,
    population:data.population
  }
}