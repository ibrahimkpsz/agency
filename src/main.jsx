import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import References from './pages/References/References.jsx'
import Contact from './pages/Contact/Contact.jsx'
import './index.css'

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "hakkimizda", element: <About /> },
      { path: "hizmetlerimiz", element: <Services /> },
      { path: "referanslar", element: <References /> },
      { path: "iletisim", element: <Contact /> },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
