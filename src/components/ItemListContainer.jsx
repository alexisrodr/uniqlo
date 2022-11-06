import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryFilter = query(queryCollection, where('category', '==', idCategory))
            getDocs(queryFilter)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
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
        <div className='text-center'>
            <h1>{greeting}</h1>
            <ItemList loading={loading} products={products} />
        </div>
    )
}
