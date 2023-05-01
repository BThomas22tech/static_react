import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Navbar.jsx'
import MainContent from './assets/MainContent.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <NavBar />
    <MainContent />
  </div>
)
