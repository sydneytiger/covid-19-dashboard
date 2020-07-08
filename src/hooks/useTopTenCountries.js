import { useContext } from 'react'
import { CovidContext} from '../components/CovidApp';
import useCovidApi from './useCovidApi';
import { countries } from '../constaints';
import {countryDataMapper} from '../utils/dataMapper';

function useTopTenCountries() {
  const {state, dispatch} = useContext(CovidContext);
  
  useCovidApi(`${countries}?sort=${state.dataKey}`, {
    initialData: [],
    dataRefiner: data => { 
      dispatch({ type: 'SET_COUNTRY_DATA', payload: countryDataMapper(data.slice(0, 10)) });
      const countries = extracAllCountries(data);
      dispatch({ type: 'SET_COUNTRY_NAME_LIST', payload: countries });
    }
  });

  const extracAllCountries = data => {
    const arr = [];
    for(let item of data) {
      if(item.countryInfo.iso2) {
        arr.push({
          name: item.country,
          code: item.countryInfo.iso2
        });
      }
    }
    return arr.sort((a, b) => a.name > b.name ? 1 : -1);
  }
}

export default useTopTenCountries
