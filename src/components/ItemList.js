import React from 'react'
import { Item } from './Item';

export const ItemList = ({ loading, products }) => {
    return (
        <div className='container'>
            {
                loading ?
                    <h2>Cargando...</h2>
                    :
                    products.map(prod => <Item key={prod.id} prod={prod} />)
            }
        </div>
    )
}
