import React from 'react'
import { Link } from 'react-router-dom';
// import feature from '../../assets/4.webp'
import './HeroStyles.css';

const Hero = () => {

    const featureImage = null;
    const featureName = 'Tanishq Kaushal'

    return (
        <div className="hero">
            <div className="hero__title"><div>Welcome back,</div></div>
            <div className="hero__name"><div>{featureName}</div></div>
            <div className="hero__categories">
                <Link to='/' className="hero__categories--category category1">
                    <div className="hero__categories--category-icon"><i class="fa-solid fa-bookmark"></i></div>
                    <div className="hero__categories--category-title">Wishlist</div>
                </Link>
                <Link to='/' className="hero__categories--category category2">
                    <div className="hero__categories--category-icon"><i class="fa-solid fa-truck-fast"></i></div>
                    <div className="hero__categories--category-title">Orders</div>
                </Link>
                <Link to='/' className="hero__categories--category category3">
                    <div className="hero__categories--category-icon"><i class="fa-solid fa-shop"></i></div>
                    <div className="hero__categories--category-title">Sell</div>
                </Link>
                <Link to='/' className="hero__categories--category category4">
                    <div className="hero__categories--category-icon"><i class="fa-solid fa-heart"></i></div>
                    <div className="hero__categories--category-title">Donate</div>
                </Link>

            </div>
        </div>
    )
}

export default Hero