import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import React from 'react'
import { useCartContext } from '../context/cartContext'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Form from 'react-bootstrap/Form';


const EmptyCart = () => {
    return (
        <div className='container'>
            <div>
                <h1>Carrito</h1>
            </div>
            <div className='mb-5'>
                <Table>
                    <tbody>
                        <tr>
                            <td className='text-center'>{`Tu carrito está vacío.`}</td>
                        </tr>
                        <tr>
                            <td className='text-center'><Link className='btn btn-danger' variant="danger" to='/' >Volver al Inicio</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

const CartItems = ({ cartList, getCartTotal, removeItem, getCartItemNumber, createOrder, handleSubmit, register }) => {

    return (
        <div className='container'>
            <div>
                <h1>Carrito</h1>
            </div>
            <div className='mb-5'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th className='text-center'></th>
                            <th className='text-center'></th>
                            <th className='text-center'>Producto</th>
                            <th className='text-center'>Precio</th>
                            <th className='text-center'>Cantidad</th>
                            <th className='text-center'>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map(prod =>
                                <tr key={prod.id}>
                                    <td className='col-md-1 text-center align-middle'><Button className='btn btn-danger' variant="danger" onClick={() => {
                                        removeItem(prod.id)
                                        getCartItemNumber()
                                    }
                                    }>X</Button></td>
                                    <td className='col-md-2 text-center align-middle'>
                                        <Link to={"/details/" + prod.id}>
                                            <img className="img-thumbnail w-50" src={prod.picture} alt={prod.name} />
                                        </Link>
                                    </td>
                                    <td className='col-md-6 text-center align-middle'>{prod.name}</td>
                                    <td className='col-md-1 text-center align-middle'>{`$ ${prod.price}`}</td>
                                    <td className='col-md-1 text-center align-middle'>{prod.quantity}</td>
                                    <td className='col-md-1 text-center align-middle'>{`$ ${prod.price * prod.quantity}`}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
            <Form onSubmit={handleSubmit(createOrder)}>
                <div className='mx-auto'>
                    <div className=''>
                        <h4>Total del carrito</h4>
                        <Table size="sm" className='w-25'>
                            <tbody>
                                <tr>
                                    <th className='col-md-1'><Form.Label>Nombre</Form.Label></th>
                                    <td className='col-md-4'><Form.Control {...register('name', {
                                        required: true,
                                        maxLength: 40
                                    })} type="text" /></td>
                                </tr>
                                <tr>
                                    <th className='col-md-1'><Form.Label>Celular</Form.Label></th>
                                    <td className='col-md-4'><Form.Control {...register('phone', {
                                        required: true,
                                        maxLength: 10
                                    })} type="tel" /></td>
                                </tr>
                                <tr>
                                    <th className='col-md-1'><Form.Label>Email</Form.Label></th>
                                    <td className='col-md-4'><Form.Control {...register('email', {
                                        required: true,
                                        maxLength: 40,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })} type="email" /></td>
                                </tr>
                                <tr>
                                    <th className='col-md-1'><Form.Label>Repetir Email</Form.Label></th>
                                    <td className='col-md-4'><Form.Control {...register('email2', {
                                        required: true,
                                        maxLength: 40,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })} type="email" /></td>
                                </tr>
                                <tr>
                                    <th className='col-md-1'><Form.Label>Total</Form.Label></th>
                                    <td className='col-md-4'><strong>{`$ ${getCartTotal()}`}</strong></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className=''>
                        <Button type="submit" className='btn btn-danger mt-2' variant="danger">Finalizar la compra</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default function Cart() {

    let cartEmpty = false;

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate();

    const { cartList, getCartTotal, removeItem, getCartItemNumber, clear } = useCartContext()

    if (cartList.length === 0) cartEmpty = true


    const createOrder = async (data, e) => {

        e.preventDefault()

        if (!data.email === data.email2) return;

        const order = (
            {
                buyer: {
                    name: data.name,
                    phone: data.phone,
                    email: data.email
                },
                items: cartList.map(({ name, id, price }) => ({
                    id: id,
                    name: name,
                    price: price
                })),
                total: getCartTotal()
            }
        )

        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, order)
            .then((resp) => navigate("/order/" + resp.id))
            .finally(() => clear())

        /*const queryCollection = collection(db, 'productos')

        const queryActualizarStock = await query(
            queryCollection,
            where(documentId(), 'in', cartList.map(p => (p.id)))
        )

        const batch = writeBatch()

        await getDocs(queryActualizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(prod => prod.id === res.id).quantity
            })))
            .catch(err => console.log(err))
            

        batch.commit()*/


    }

    return (

        <>
            {
                cartEmpty ?
                    <EmptyCart />
                    :
                    <CartItems
                        cartList={cartList}
                        getCartTotal={getCartTotal}
                        removeItem={removeItem}
                        getCartItemNumber={getCartItemNumber}
                        createOrder={createOrder}
                        handleSubmit={handleSubmit}
                        register={register}
                    />
            }
        </>
    )
}
