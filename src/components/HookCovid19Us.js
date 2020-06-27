import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { base_url, us } from '../constaints';

function HookCovid19Us({selectedState = ''}) {
  const [usState, setusState] = useState(selectedState);
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}${us}${usState}`)
    .then(resp => {
      const data = Array.isArray(resp.data) ? resp.data : [resp.data];
      setStatistic(data);
    })
  }, [])
  
  
  return (
    <div>
      <ul>
        {
          statistic.map(item => <li key={item.state}>{item.state} {item.active} active cases</li>)
        }
      </ul>
    </div>
  )
}

export default HookCovid19Us
