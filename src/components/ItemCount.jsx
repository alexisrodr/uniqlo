import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const CountMode = ({ onAdd, onUp, onDown, quantity }) => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <Button className='btn btn-outline-danger mx-2' variant="outline-danger" onClick={onDown}>-</Button>
                <div className='mx-2'>
                    <span>{quantity}</span>
                </div>
                <Button className='btn btn-outline-danger mx-2' variant="outline-danger" onClick={onUp}>+</Button>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <Button className='btn btn-outline-danger' variant="outline-danger" onClick={onAdd}>Agregar al carrito</Button>
            </div>
        </>
    )
}

const ButtonMode = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <Link className='btn btn-outline-danger' variant="outline-danger" to='/' >Seguir comprando</Link>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-1'>
                <Link className='btn btn-danger' variant="danger" to='/cart'>Ir al carrito</Link>
            </div>
        </>
    )
}


export const ItemCount = ({ onAdd, onUp, onDown, quantity, inputMode }) => {


    return (

        <>
            {
                inputMode ?
                    <CountMode onUp={onUp} onDown={onDown} onAdd={onAdd} quantity={quantity} />
                    :
                    <ButtonMode />
            }
        </>


    )
}
