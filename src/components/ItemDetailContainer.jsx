import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Spinner from 'react-bootstrap/esm/Spinner';


export default function ItemDetailContainer() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProducto } = useParams()


    useEffect(() => {
        if (idProducto) {
            const db = getFirestore()
            const queryDoc = doc(db, 'productos', idProducto)
            getDoc(queryDoc)
                .then(resp => setProducts({ id: resp.id, ...resp.data() }))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    })

    return (
        <>
            {
                loading ?
                    <Spinner animation="border" variant="danger" />
                    :
                    <>
                        <ItemDetail products={products} />
                    </>
            }
        </>

    )
}
