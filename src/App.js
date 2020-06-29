import React from 'react';
import './App.css';
import api from './api';
import Covid19World from './components/Covid19World';

function App() {
  window.api = api;
  return (
    <div className="App">
      <header className="App-header">
        <Covid19World />
      </header>
    </div>
  );
}

export default App;
