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

    return (
        <div className='container my-5'>
            <h1>Puchases</h1>
            
                {
                    puchases.map(puchase => (
                        <Card key={puchase.id}>
                        <ul >
                            <Card.Header>{puchase.createdAt}</Card.Header>
                            {puchase.cart.products.map(puchaseCart => (
                                <li key={puchaseCart.id}>
                                    <Card.Body>
                                        <Card.Title>{puchaseCart.title}</Card.Title>
                                    </Card.Body>
                                </li>
                            ))}
                        </ul>
                        </Card>
                    ))
                }


            

        </div>
    );
};

export default Puchases;