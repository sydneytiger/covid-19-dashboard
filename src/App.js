import React from 'react';
import './App.css';
import api from './api';
import Covid19World from './components/covid19/Covid19World';
import RootCounter from './components/useContext+useReducer/RootCounter';
import UseCallbackComponent from './components/useCallback/UseCallbackComponent';

function App() {
  window.api = api;
  return (
    <div className="App">
      <header className="App-header">
        
        <RootCounter />
        <UseCallbackComponent />
        <Covid19World />
      </header>
    </div>
  );
}

export default App;
