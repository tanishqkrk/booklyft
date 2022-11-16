import React from 'react'
// import data from './data';
import './ProductStyles.css'
import { Link } from 'react-router-dom';

const Product = ({ name, images, price, author, key, url }) => {
    return (
        // data.products.map((product) => (
        <Link to={url} key={key} className="products__product">
            <img src={images} alt="" className="products__product--img" />
            <div className="products__product--data">
                <div>
                    <h3 className="products__product--name">{name}</h3>
                    <h6 className="products__product--author">{author}</h6>
                    <div className="products__product--price">₹ {price}</div>
                </div>
            </div>
        </Link>
        // ))
    );
}

export default Product