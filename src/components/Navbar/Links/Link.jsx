import React from 'react'

const Link = ({ location, name }) => {
    return (
        <li className='navbar__links--link'><a className='navbar__links--link-link' href={location}>{name}</a></li>
    )
}

export default Link