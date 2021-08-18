import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link className='link' to='/'>
                Calculator
            </Link>
            <Link className='link' to='/currency'>
                Currency Converter
            </Link>
        </div>
    )
}

export default Navbar
