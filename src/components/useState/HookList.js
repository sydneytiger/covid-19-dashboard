import React, {useState} from 'react'

function HookList() {
  const [list, setList] = useState([]);
  
  const appendItem = () => {
    const num = Math.floor(Math.random() * (10 - 1) + 1);
    if(list.length < 10) {
      setList([...list, num]);
    } else {
      list.shift();
      setList([...list, num]);
    }
  }

  return (
    <div>
      <div>
        env: {process.env.NODE_ENV}
      </div>
      
      <button onClick={appendItem}>Append List</button>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default HookList
