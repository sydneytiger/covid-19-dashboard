import React, { useState, useEffect } from 'react'
import { us } from '../../constaints';

function HookCovid19Us({selectedState = ''}) {
  const [usState] = useState(selectedState);
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    getDataForStates();
  }, [])
  
  const getDataForStates = () => {
    window.api.get(`${us}${usState}`)
    .then(resp => {
      const data = Array.isArray(resp.data) ? resp.data : [resp.data];
      setStatistic(data);
    })
  }
  
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
