import React from 'react';
import '../../style/GlobalStatistic.css';

function GlobalStatistic({ data }) {
  const {cases, active, deaths, recovered} = data;
  return (
    <div className="globalStats-grid">
      <div>Cases:<span className="red">{new Intl.NumberFormat().format(cases)}</span></div>
      <div>Deaths: <span className="gray">{new Intl.NumberFormat().format(deaths)}</span></div>
      <div>Active: <span className="orange">{new Intl.NumberFormat().format(active)}</span></div>
      <div>Recovered: <span className="green">{new Intl.NumberFormat().format(recovered)}</span></div>
    </div>
  )
}

export default GlobalStatistic
