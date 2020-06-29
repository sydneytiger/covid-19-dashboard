import React, {useContext} from 'react'
import { CountContext } from './RootCounter'

function NestedB() {
  const {count, dispatch} = useContext(CountContext);

  return (
    <div>
      <div>Nested B - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default NestedB
