import React from 'react'

export default ({id, product}) => (
    <div className='productDiv'>
        <img src='/img/icon.png'/>
        <div className="details">
            <div className='productType'>{product.type}</div>
            <h3>{product.name}</h3>
            <div className='producerTag'>{product.producer}</div>
            <div className='priceTag'><span>{product.price.toFixed(2)} PLN</span></div>
        </div>
    </div>
)