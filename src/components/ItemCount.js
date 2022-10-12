import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export const ItemCount = () => {

    const [quantity, setQuantity] = useState(1);

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

        setQuantity(1)

    }
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Button className='btn btn-outline-danger mx-2' variant="outline-danger" onClick={onDown}>-</Button>
            <div className='mx-2'>
                <span>{quantity}</span>
            </div>
            <Button className='btn btn-outline-danger mx-2' variant="outline-danger" onClick={onUp}>+</Button>
            <Button className='btn btn-outline-danger mx-4' variant="outline-danger" onClick={onAdd}>Agregar al carrito</Button>
        </div>
    )
}
