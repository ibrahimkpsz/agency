import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
