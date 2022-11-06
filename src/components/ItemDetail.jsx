import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext';
import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom';


export default function ItemDetail({ products }) {

    const [inputMode, setInputMode] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addItem, getCartItemNumber } = useCartContext();

    const onUp = () => {

        setQuantity(quantity + 1);

    }

    const onDown = () => {

        if (quantity === 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }


    }

    const onAdd = () => {

        setInputMode(false)
        addItem({ ...products, quantity })
        getCartItemNumber()
    }

    return (

        products ?
            <div className='text-center'>
                <h2>{products.name}</h2>
                <div className="col-md-3 px-0 mx-auto d-block">
                    <img className='rounded' src={products.picture} alt={products.name} style={{ width: "100%" }} />
                </div>
                <span>{"$" + products.price}</span>
                <p>{products.description}</p>
                <ItemCount onUp={onUp} onDown={onDown} onAdd={onAdd} quantity={quantity} inputMode={inputMode} />
            </div>
            :
            <div className='text-center'>
                <h2>El producto no existe.</h2>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <Link className='btn btn-outline-danger' variant="outline-danger" to='/' >Volver al inicio</Link>
                </div>
            </div>

    )
}
