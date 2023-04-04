import { useState } from 'react'
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import AdminHome from './pages/AdminHome'
import Home from './pages/Home'
import WorkOrderDetail from './pages/WorkOrderDetail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-4">
      <Link to="/">Home</Link> | <Link to="/work-orders">Work Orders</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-orders" element={<AdminHome />} />
        <Route path="/work-orders/:id" element={<WorkOrderDetail />} />
      </Routes>
    </div>

  )
}

export default App
