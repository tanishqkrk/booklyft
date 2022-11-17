import React from 'react'
import './Utilitybar.css'
import NavbarLink from '../Links/NavbarLink'

export const Utilitybar = () => {
    return (
        <div className="utilitybar">
            <ul className="utilitybar__items">
                <NavbarLink location='/' name={<i class="fa-solid fa-user"></i >}></NavbarLink>
                <NavbarLink location='/' name={<i class="fa-solid fa-user"></i >}></NavbarLink>
                <NavbarLink location='/' name={<i class="fa-solid fa-user"></i >}></NavbarLink>
                <NavbarLink location='/' name={<i class="fa-solid fa-cart-shopping"></i >}></NavbarLink>
            </ul>
        </div>
    )
}
