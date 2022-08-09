import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPuchasesThunk } from '../store/slice/puchases.slice';

const Puchases = () => {

    const puchases=useSelector(state=>state.puchases)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPuchasesThunk())
    },[])

    return (
        <div className='container my-5'>
            <h1>Puchases</h1>            
                {
                    puchases.map(puchase=>(
                        <ul key={puchase.id}>
                            {puchase.cart.products.map(puchaseCart=>(
                                <li key={puchaseCart.id}>
                                    {puchaseCart.title}
                                </li>
                            ))}
                        </ul>
                    ))
                }            
        </div>
    );
};

export default Puchases;