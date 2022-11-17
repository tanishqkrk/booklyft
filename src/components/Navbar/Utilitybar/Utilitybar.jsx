import React from 'react'
import Link from '../Links/Link'
import './Utilitybar.css'

export const Utilitybar = () => {
    return (
        <div className="utilitybar">
            <ul className="utilitybar__items">
                <Link location='/' name={<i class="fa-solid fa-user"></i >}></Link>
                <Link location='/' name={<i class="fa-solid fa-user"></i >}></Link>
                <Link location='/' name={<i class="fa-solid fa-user"></i >}></Link>
                <Link location='/' name={<i class="fa-solid fa-cart-shopping"></i >}></Link>
            </ul>
        </div>
    )
}
