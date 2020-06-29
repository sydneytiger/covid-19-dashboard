import React, {useReducer, Context} from 'react'
import NestedA from './NestedA';
import NestedC from './NestedC';

export const CountContext = React.createContext();

function RootCounter() {
  const initCount = 0;
  const reducer = (state, action) => {
    switch(action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return initCount;
      default: 
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initCount);

  return (
    <div>
      <CountContext.Provider value={{count, dispatch}}>
        <NestedA />
        <NestedC />
      </CountContext.Provider>
    </div>
  )
}

export default RootCounter
