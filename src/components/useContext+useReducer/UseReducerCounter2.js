import React, {useReducer} from 'react'

function UseReducerCounter2() {
  const initailState = {
    counter1: 0,
    counter2: 10
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment counter 1':
        return { ...state, counter1: state.counter1 + action.payload };
      case 'decrement counter 1':
        return { ...state, counter1: state.counter1 - action.payload };
      case 'increment counter 2':
        return { ...state, counter2: state.counter2 + action.payload };
      case 'decrement counter 2':
        return { ...state, counter2: state.counter2 - action.payload };
      case 'reset':
        return initailState;
      default:
        return state;
    }
  }

  const [counters, dispatch] = useReducer(reducer, initailState);

  return (
    <div>
      <div>
        <div>Counter 1 - {counters.counter1}</div>
        <button onClick={() => dispatch({ type:'increment counter 1', payload: 1})}>Increment 1</button>
        <button onClick={() => dispatch({ type:'decrement counter 1', payload: 1})}>Decrement 1</button>
        <button onClick={() => dispatch({ type:'increment counter 1', payload: 5})}>Increment 5</button>
        <button onClick={() => dispatch({ type:'decrement counter 1', payload: 5})}>Decrement 5</button>
      </div>
      
      <div>
        <div>Counter 2 - {counters.counter2}</div>
        <button onClick={() => dispatch({ type:'increment counter 2', payload: 1})}>Increment 1</button>
        <button onClick={() => dispatch({ type:'decrement counter 2', payload: 1})}>Decrement 1</button>
        <button onClick={() => dispatch({ type:'increment counter 2', payload: 5})}>Increment 5</button>
        <button onClick={() => dispatch({ type:'decrement counter 2', payload: 5})}>Decrement 5</button>
      </div>
      
      <button onClick={() => dispatch({ type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerCounter2
