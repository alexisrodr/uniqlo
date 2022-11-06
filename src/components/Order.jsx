import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Order() {

    const { orderNumber } = useParams()

    return (
        <div className='text-center'>
            <h1>Gracias por comprar en UNIQLO!</h1>
            <h2>El codigo de su orden es: {orderNumber}</h2>
            <h4>El envio estará llegando a su domicilio dentro de las proximas 48hs.</h4>
            <h5>Ante cualquier duda contactarse al <strong>+541105884895</strong></h5>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <Link className='btn btn-outline-danger' variant="outline-danger" to='/' >Volver al inicio</Link>
            </div>
        </div>
    )
}
