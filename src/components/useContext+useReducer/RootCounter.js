import React, {useReducer} from 'react'
import NestedA from './NestedA';
import NestedC from './NestedC';
import Title from '../Title';

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
    <>
      <Title text="useContext + useReducer"></Title>
      <div className="center">
        <p>
          Similar to Redux. useContext maps to redux store and useReducer maps to reducer.
        </p>
        <CountContext.Provider value={{count, dispatch}}>
          <NestedA />
          <NestedC />
        </CountContext.Provider>
      </div>
    </>
  )
}

export default RootCounter
