import { useState } from 'react'
import Navbar from './components/Navbar'
import WorkOrderList from './components/WorkOrderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WorkOrderList />
    </>

  )
}

export default App
