import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function Navbar() {
  return (
    <header style={{ position: 'fixed', right: '0', left: '0', top: '0', background: 'white'}}>
       <nav className=' flex justify-center' style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "1rem", "fontSize": "22px" }}>
        <Link className='text-orange-700' to="/" > Logo </Link>
        <div className="nav-links" style={{  display: 'flex' }}>
            <Link to="/" className="mr-4 text-blue-500" style={{ marginRight: "1rem" }}>Home</Link>
            <Link to="/login" className="text-blue-500" style={{ marginRight: "1rem" }}>Login</Link>
            <Link to="/register" className="text-blue-500" style={{ marginRight: "1rem" }}>Register</Link>
            <Link to="/question-forms" className="text-blue-500" style={{ marginRight: "1rem" }}>Question Forms</Link>
            <Link to="/user-management" className="text-blue-500" style={{ marginRight: "1rem" }}>User management </Link>
            <Logout />
        </div>
        <div className="search-box">
          <input type="search" placeholder='Search...' style={{ padding: '2px 10px', border: '2px solid black' }} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
