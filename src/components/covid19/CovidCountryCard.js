import React from 'react';
import '../../style/CovidCountryCard.css';

function CovidCountryCard({data}) {

  return (
    <div>
      <div className="covid-country-card">
        <div className="header">
          <img src={data.countryInfo.flag} alt={data.country} />
          <h3>{data.country}</h3>
        </div>
        <div className="body">
          <h4>Overall</h4>
          <div>Cases: <span>{data.cases.toLocaleString()}</span></div>
          <div>Active: <span>{data.active.toLocaleString()}</span></div>
          <div>Critical: <span>{data.critical.toLocaleString()}</span></div>
          <div>Deaths: <span>{data.deaths.toLocaleString()}</span></div>
          <div>Tests: <span>{data.tests.toLocaleString()}</span></div>

          <h4>Today</h4>
          <div>Cases: <span>{data.todayCases.toLocaleString()}</span></div>
          <div>Deaths: <span>{data.todayDeaths.toLocaleString()}</span></div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CovidCountryCard)
