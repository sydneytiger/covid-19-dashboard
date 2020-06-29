import React from 'react'

function Banner({text, value}) {
  console.log(`render Banner ${text}`)
  return (
    <div>
      {text} - {value}
    </div>
  )
}

export default React.memo(Banner)
