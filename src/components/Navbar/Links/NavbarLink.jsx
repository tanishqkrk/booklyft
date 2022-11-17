import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({ location, name, role }) => {
    return (
        <li className={`navbar__links--link ${role}`}><Link className='navbar__links--link-link' to={location}>{name}</Link></li>
    )
}

export default NavbarLink