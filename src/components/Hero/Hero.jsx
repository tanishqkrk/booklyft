import React from 'react'
// import feature from '../../assets/4.webp'
import './HeroStyles.css';

const Hero = () => {

    const featureImage = null;
    const featureName = 'Elon Musk'

    return (
        <div className="hero">
            <div className="hero__title"><div>Today's features</div></div>
            <div className="hero__image"><img src='/assets/2.jpg' alt="" className="hero__image--img" /></div>
            <div className="hero__name"><div>{featureName}</div></div>
        </div>
    )
}

export default Hero