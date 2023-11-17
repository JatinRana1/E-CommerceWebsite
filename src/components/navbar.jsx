import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import '../../global.css' 
const Navbar = () => {
    return (
    <nav className='py-2 px-[1.6rem] bg-gray-700 text-gray-100 z-10 fixed w-full'>
        <ul className='flex flex-row gap-4 justify-end'>
            <NavLink to={'/'}><li className='item_hover'>Product</li></NavLink>
            <NavLink to={'./cart'} className='item_hover'>
            <button>
                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle fill='#ffff' cx="16.5" cy="18.5" r="1.5"/>
                <circle fill='#ffff' cx="9.5" cy="18.5" r="1.5"/>
                <path fill='#ffff' d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                </svg>
            </button>
            </NavLink>
        </ul>
    </nav>    
  )
}

export default Navbar
