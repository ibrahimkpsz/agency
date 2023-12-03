import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
