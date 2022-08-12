import React from 'react';
import { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { buyCartThunk, getCartThunk } from '../store/slice/cart.slice';
import emptyCart from '../image/emptyCart.png'
import swal from 'sweetalert'

const CartSideBar = ({ show, handleClose }) => {

    const dispatch = useDispatch()
    const cartLists = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    const totalCal = () => {
        let total = 0
        cartLists.forEach(productPrice => {
            total += Number(productPrice.price)*Number(productPrice.productsInCart.quantity)
        });
        return(total)
    }
    const buyCart=()=>{
        swal({
            title:'Successful Purchase',
            icon: "success"
        })
        dispatch(buyCartThunk())
    }

    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart List</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartLists.map(cartList => (
                        <ul key={cartList.id}>
                            <li style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #216dc1' }}>
                                <h5>{cartList.title}</h5>
                                <span><b>Quantity</b> {cartList.productsInCart.quantity} <b>Unit Price: $</b> {Number(cartList.price)}.00 </span>
                                <span>Total: ${Number(cartList.productsInCart.quantity) * Number(cartList.price)}.00</span>
                            </li>
                        </ul>
                    ))
                }
                {cartLists.length >= 1 ? (
                 <>
                    <h4 style={{color:'red'}}>Total: {totalCal()}.00</h4>             
                    < Button onClick={buyCart}>Make a purchase</Button>
                 </>   

                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <img src={emptyCart} className='img-fluid' />
                        <h1>Cart is empty</h1>
                    </div>
                )
                }
            </Offcanvas.Body>
        </Offcanvas >
    );
};

export default CartSideBar;