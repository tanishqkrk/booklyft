import React from 'react'
import Product from './Product'
// import data from '../../../server/data'
import './ProductsStyles.css'
import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import logger from 'use-reducer-logger'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAILED':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

const Products = () => {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    })
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            }
            catch (err) {
                dispatch({ type: 'FETCH_FAILED', payload: err.message })
            }
            // setProducts(result.data);
        }
        fetchData()
    },
        [])


    return (
        <div className="products">
            {
                loading ? (<div className='loading-text'>Loading...</div>)
                    :
                    error ? (<div className='error-text'>{error}</div>)
                        :
                        products.map((product) => (
                            <Product url={`/product/${product.slug}`} key={product.slug} name={product.name} images={product.images} price={product.price} author={product.author}></Product>
                        ))
            }
        </div>
    )
}

export default Products