import React, { useEffect, useState } from 'react'
import { gFetch } from '../helpers/gFetch';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idProducto } = useParams()

    useEffect(() => {
        if (idProducto) {
            gFetch()
                .then(res => setProducts(res.filter(prod => prod.id === idProducto)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else {
            gFetch()
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    })

    return (
        <>
            {
                loading ?
                    <h2 className='mx-auto'>Cargando...</h2>
                    :
                    products.map(prod => <ItemDetail products={prod} />)
            }
        </>

    )
}
