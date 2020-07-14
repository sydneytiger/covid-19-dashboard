import React from 'react';
import './CovidCountryCard.css';

function CovidCountryCard({data}) {

  return (
    <div>
      <div className="covid-country-card">
        <div className="header">
          <img src={data.flag} alt={data.country} />
          <h3>{data.country}</h3>
        </div>
        <div className="body">
          <h4>Overall</h4>
          <div>Cases: <span className="overall-cases">{data.cases.toLocaleString()}</span></div>
          <div>Active: <span className="overall-active">{data.active.toLocaleString()}</span></div>
          <div>Critical: <span className="overall-critical">{data.critical.toLocaleString()}</span></div>
          <div>Deaths: <span className="overall-deaths">{data.deaths.toLocaleString()}</span></div>
          <div>Tests: <span className="overall-tests">{data.tests.toLocaleString()}</span></div>

          <h4>Today</h4>
          <div>Cases: <span className="today-cases">{data.todayCases.toLocaleString()}</span></div>
          <div>Deaths: <span className="today-deaths">{data.todayDeaths.toLocaleString()}</span></div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CovidCountryCard)
