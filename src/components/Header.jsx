import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container-fluid bg-info'>
      <div className="container">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>Logo</h2>
          </div>
          <nav className='col-auto'>
            <ul className='d-sm-flex'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/form">Form</Link></li>
              <li><Link to="/hooks">Hook Page</Link></li>
              <li><Link to="/scroll">Scroll</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}