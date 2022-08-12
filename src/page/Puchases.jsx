import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPuchasesThunk } from '../store/slice/puchases.slice';
import { Card } from 'react-bootstrap'

const Puchases = () => {

    const puchases = useSelector(state => state.puchases)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPuchasesThunk())
    }, [])

    // const formatDate=date=>{
    //     const dateFormat=date.toStringDate()
    //     console.log(dateFormat)
    // }
    const calTotal =()=>{
        let total=0
        puchases.forEach(puchase => {            
            puchase.cart.products.forEach(puchaseCart => {
                total+=Number(puchaseCart.price) * Number(puchaseCart.productsInCart.quantity)
            });
        });
        return total
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className='container my-5'>
            <h1>Puchases</h1>

            {
                puchases.map(puchase => (
                    <Card key={puchase.id}>
                        <ul >
                            <Card.Header>{new Date(puchase.createdAt).toLocaleDateString(undefined, options)}</Card.Header>
                            {puchase.cart.products.map(puchaseCart => (
                                <li key={puchaseCart.id}>
                                    <Card.Body>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Card.Title>{puchaseCart.title}</Card.Title>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <span>Quantity: {puchaseCart.productsInCart.quantity}</span>
                                                <span style={{ color: 'red' }}>Total: ${puchaseCart.price * puchaseCart.productsInCart.quantity}.00</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))
            }
            <h3 style={{ color: 'red' }}>Total Purchase: ${calTotal()}.00 </h3>
        </div>
    );
};

export default Puchases;