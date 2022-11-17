import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
    return (
        <form action="" className='searchbar'>
            <input type="text" className='searchbar__box' />
            <button className='searchbar__icon'><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default Searchbar