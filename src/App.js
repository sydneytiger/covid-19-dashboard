import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookList from './components/HookList';
import HookCovid19Us from './components/HookCovid19Us';
import HookCovid19World from './components/HookCovid19World';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter />
        <HookCounter />
        <HookList />
        <HookCovid19Us selectedState=""/> */}
        <HookCovid19World selectedCountry=""/>
      </header>
    </div>
  );
}

export default App;
