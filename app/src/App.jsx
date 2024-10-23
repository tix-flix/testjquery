import React, { Children, useState } from 'react'
import Btn from "./components/btn/Btn.jsx"
import Text from './Components/Text/text.jsx';


function App() {
  const [count, setCount] = useState(0);


  const a = () => {
    setCount(count + 1)
  }
  const b = () => {
    setCount(count - 1)
  }
  const c = () => {
    setCount(count * 2)
  }
  const d = () => {
    setCount(count / 2)
  }
  const e = () => {
    setCount(0)
  }


  return (
    <> 
    <Text>{count}</Text>

    <Btn
      a={a}
      b={b}
      c={c}
      d={d}
      e={e}
    />
    </>
  )
}

export default App
