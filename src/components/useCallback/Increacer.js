import React from 'react'

function Increacer({text, clickAction}) {
  console.log(`Increacer render ${text}`)
  return (
    <div>
      <button onClick={clickAction}>Increment ${text}</button>
    </div>
  )
}

export default React.memo(Increacer)
