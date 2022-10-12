import React from 'react'
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';

export const Item = ({ prod }) => {
    return (

        <>
            <div className="card d-inline-block m-3" style={{ width: "18rem" }}>
                <Link to={"/details/" + prod.id}>
                    <img className="card-img-top" src={prod.picture} alt={prod.name} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">{"$" + prod.price}</p>
                    <ItemCount />
                </div>
            </div>
        </>
    )
}
