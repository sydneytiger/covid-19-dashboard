import React from 'react'

function Title({text}) {
  return (
    <div style={{textAlign:"center", margin:"50px 0"}}>
        <h1>{text}</h1>
    </div>
  )
}

export default React.memo(Title)
