import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    // 1. Props
    <Parent/>
  )
}

export default App
