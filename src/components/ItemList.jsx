import React from 'react'
import { Item } from './Item';
import Spinner from 'react-bootstrap/Spinner'

export const ItemList = ({ loading, products }) => {
    return (
        <div className='container'>
            {
                loading ?
                    <Spinner animation="border" variant="danger" />
                    :
                    products.map(prod => <Item key={prod.id} prod={prod} />)
            }
        </div>
    )
}
