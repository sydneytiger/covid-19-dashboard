import React, { useContext } from 'react'
import { CovidContext } from './CovidApp';

function DataKeyDropDown() {
  const { dispatch } = useContext(CovidContext);

  const onChange = e => {
    dispatch({type: 'SET_DATAKEY', payload: e.target.value });
  }

  return (
    <div className="center margin-top-l ">
      <label htmlFor='key-select'>You concern on: </label>
      <select id='key-select' onChange={onChange}>
        <option value='cases'>Overall Cases</option>
        <option value='deaths'>Overall Deaths</option>
        <option value='todayCases'>Today Cases</option>
        <option value='recovered'>Recovered</option>
        <option value='active'>Active</option>
      </select>
    </div>
  )
}

export default DataKeyDropDown
