import React from 'react';
import './App.css';
import api from './api';
import HookCovid19Us from './components/HookCovid19Us';
import HookCovid19World from './components/HookCovid19World';

function App() {
  window.api = api;
  return (
    <div className="App">
      <header className="App-header">
        <HookCovid19Us selectedState=""/>
        <HookCovid19World selectedCountry=""/>
      </header>
    </div>
  );
}

export default App;
