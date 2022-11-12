import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
    const params = useParams();
    const { slug } = params;
    return (
        <div>
            <h1 style={{ color: 'white' }}>{slug}</h1>
        </div>
    );
}

export default ProductScreen;