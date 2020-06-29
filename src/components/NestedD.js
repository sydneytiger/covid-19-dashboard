import React, {useContext} from 'react'
import { CountContext } from './RootCounter';

function NestedD() {
  const {count, dispatch} = useContext(CountContext);
  return (
    <div>
      <div>Nested D - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default NestedD
