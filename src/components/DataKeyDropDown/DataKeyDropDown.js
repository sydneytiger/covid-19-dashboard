import React, { useContext } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TopTenContext } from '../../contexts/topTenContext';

function DataKeyDropDown() {
  const { topTenDispatch } = useContext(TopTenContext);

  const onChange = e => {
    topTenDispatch({type: 'SET_DATAKEY', payload: e.target.value });
  }

  return (
    <>
      <div style={{ width: '100%', textAlign: 'center', margin: ' 30px 0 10px 0'}}>
        <FormControl style={{minWidth: '250px', textAlign:'center'}}>
          <InputLabel htmlFor="key-select">You concern on</InputLabel>
          <Select
            native
            onChange={onChange}
            inputProps={{
              id: 'key-select',
            }}>
            <option value='cases'>Overall Cases</option>
            <option value='deaths'>Overall Deaths</option>
            <option value='todayCases'>Today Cases</option>
            <option value='recovered'>Recovered</option>
            <option value='active'>Active</option>
          </Select>
        </FormControl>
      </div>
    </>
  )
}

export default DataKeyDropDown
