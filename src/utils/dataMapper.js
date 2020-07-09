export const countryCovideDataMapper = data => {
  if(!Array.isArray(data)) return _countryCovidDataMapper(data);
  
  const result = [];
  for(let item of data){
    result.push(_countryCovidDataMapper(item));
  }
  
  return result;
}

const _countryCovidDataMapper = data => {
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

export const countryNameMapper = arr => {
  const result = [];
  for(let item of arr) {
    if(item.countryInfo.iso2) {
      result.push({
        name: item.country,
        code: item.countryInfo.iso2
      });
    }
  }
  return result.sort((a, b) => a.name > b.name ? 1 : -1);
}