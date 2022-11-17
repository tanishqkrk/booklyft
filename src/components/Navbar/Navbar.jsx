import React from 'react'
import NavbarLink from './Links/NavbarLink';
import './NavbarStyle.css';
import Searchbar from './Searchbar/Searchbar'

const Navbar = () => {

    const name = 'Sign in'

    const showSearch = () => {
        document.querySelector('.searchbar').classList.toggle('searchOn')
    }

    return (
        <>
            <header className='navbar'>
                <a href='/' className="navbar__logo">
                    <img src='/assets/logo.png' alt="" className="navbar__logo--img" />
                    <h1 className="navbar__logo--title">Booklyft</h1>
                </a>
                <form className="navbar__search">
                    <div onClick={showSearch} className="navbar__search--hamIcon"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input placeholder='Search Books' type="text" className="navbar__search--box" />
                    <button className="navbar__search--icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <ul className="navbar__links">
                    <NavbarLink role={'navbar_shopping_cart'} location='/' name={<i class="fa-solid fa-cart-shopping"></i>}></NavbarLink>
                    <NavbarLink role={'navbar_signup_button'} location='/' name={name}></NavbarLink>
                    <NavbarLink role={'navbar_user'} location='/' name={<i class="fa-solid fa-user"></i>}></NavbarLink>
                </ul>
            </header>
            <Searchbar></Searchbar>
        </>
    )
}

export default Navbar