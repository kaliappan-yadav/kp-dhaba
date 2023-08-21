
import React from 'react'
import { Link } from 'react-router-dom'

const NavigationComponent = () => {
  return (
  <div>
    <nav className='navbar navbar-dark '>
        <Link to="/" className='nav-brand' eleme>Home</Link>
        <Link to="/aboutus" className='nav-brand'>About Us</Link>
        <Link to="/login" className='nav-brand'>Admin Panel</Link>
        <Link to="/events" className='nav-brand'>Events</Link>
        <Link to="/price" className='nav-brand'>Price</Link>
    </nav>
  </div>
  )
}

export default NavigationComponent