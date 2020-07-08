import React from 'react';
import './style/App.css';
import api from './api';
import { CovidApp } from './components/CovidApp';

function App() {
  window.api = api;
  return (
    <CovidApp />
  );
}

export default App;
