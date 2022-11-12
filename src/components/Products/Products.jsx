import React from 'react'
import Product from './Product'
import data from './data'
import './ProductsStyles.css'

const Products = () => {
    return (
        <div className="products">
            {
                data.products.map((product) => (
                    <Product url={`/product/${product.slug}`} key={product.slug} name={product.name} images={product.images} price={product.price} author={product.author}></Product>
                ))
            }
        </div>
    )
}

export default Products