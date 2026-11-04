import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <Users/>
    </>
  )
}

export default App
