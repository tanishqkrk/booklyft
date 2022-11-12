import React from 'react'
import Link from './Links/Link';
import './NavbarStyle.css'


const Navbar = () => {

    const name = 'Sign in'

    return (
        <header className='navbar'>
            <a href='/' className="navbar__logo">
                <img src='/assets/logo.png' alt="" className="navbar__logo--img" />
                <h1 className="navbar__logo--title">Booklyft</h1>
            </a>
            <form className="navbar__search">
                <input placeholder='Search Books' type="text" className="navbar__search--box" />
                <button className="navbar__search--icon"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            <ul className="navbar__links">
                <Link location='www.google.com' name={<i class="fa-solid fa-cart-shopping"></i>}></Link>
                <Link location='www.google.com' name={name}></Link>
            </ul>
        </header>
    )
}

export default Navbar