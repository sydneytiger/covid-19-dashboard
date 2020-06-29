import React, {useReducer} from 'react'

function UseReducerCounter() {
  const initCount = 0;
  const reducer = (currentCount, action) => {
    switch(action) {
      case 'increment':
        return currentCount + 1;
      case 'decrement':
        return currentCount - 1;
      case 'reset':
        return initCount;
      default:
        return currentCount;
    }
  }

  const [count, dispatch] = useReducer(reducer, initCount);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerCounter
