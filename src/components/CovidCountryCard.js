import React from 'react'

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
          <div>Cases: <span>{data.cases}</span></div>
          <div>Active: <span>{data.active}</span></div>
          <div>Critical: <span>{data.critical}</span></div>
          <div>Deaths: <span>{data.deaths}</span></div>
          <div>Tests: <span>{data.tests}</span></div>

          <h4>Today</h4>
          <div>Cases: <span>{data.todayCases}</span></div>
          <div>Deaths: <span>{data.todayDeaths}</span></div>
        </div>
      </div>
    </div>
  )
}

export default CovidCountryCard
