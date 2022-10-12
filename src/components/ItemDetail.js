import React from 'react'

export default function ItemDetail({ products }) {
    return (
        <div className='text-center'>
            <h2>{products.name}</h2>
            <div className="col-md-3 px-0 mx-auto d-block">
                <img className='rounded' src={products.picture} alt={products.name} style={{ width: "100%" }} />
            </div>
            <span>{"$" + products.price}</span>
            <p>{products.description}</p>
        </div>
    )
}
