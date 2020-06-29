import React, { useState} from 'react'

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={ () => setCount(prev => prev + 1)}>Increase count</button>
      </div>
      <div>
        <button onClick={ () => setCount(count - 1)}>Decrease count</button>
      </div>
      <div>
        Count is: {count}
      </div>
    </>
  )
}

export default HookCounter
