import React from 'react'
import Link from './Links/Link';
import './NavbarStyle.css';
import Searchbar from './Searchbar/Searchbar'

const Navbar = () => {

    const name = 'Sign in'

    return (
        <>
            <header className='navbar'>
                <a href='/' className="navbar__logo">
                    <img src='/assets/logo.png' alt="" className="navbar__logo--img" />
                    <h1 className="navbar__logo--title">Booklyft</h1>
                </a>
                <form className="navbar__search">
                    <div className="navbar__search--hamIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input placeholder='Search Books' type="text" className="navbar__search--box" />
                    <button className="navbar__search--icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <ul className="navbar__links">
                    <Link location='/' name={<i class="fa-solid fa-cart-shopping"></i>}></Link>
                    <Link location='/' name={name}></Link>
                </ul>
            </header>
            <Searchbar></Searchbar>
        </>
    )
}

export default Navbar