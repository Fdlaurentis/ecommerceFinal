import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slice/product.slice';
import { Button } from 'react-bootstrap'
import { addCartThunk } from '../store/slice/cart.slice';

const ProductDetails = () => {

    const allItems = useSelector(state => state.products)
    const [filterId, setFilterId] = useState({})
    const [productSug, setProductSug] = useState([])
    const [quantity, setQuantity] = useState(1)
    const token=localStorage.getItem('token')
    const { id } = useParams()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    useEffect(() => {
        const newProducts = allItems.find(newProduct => newProduct.id === Number(id))
        setFilterId(newProducts)
        const productFiletrs = allItems.filter(producFilter => producFilter.category.id === newProducts.category.id)
        setProductSug(productFiletrs)
    }, [allItems, id])

    const count = () => {
        setQuantity(quantity + 1)
    }

    const desCount = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }

    const addCarts=()=>{
        if (token){
            const addCart={
                id: filterId.id,
                quantity
            }
            dispatch(addCartThunk(addCart))
            navigate('/')
        }else{
            navigate('/login')
        }        
    }


    return (
        <div className='container my-5' style={{ textAlign: 'center' }}>
            <h1 >Product Deatails - <span style={{fontSize:'15px'}}>{filterId?.title}</span></h1>
            <div>
                <div className='container'>
                    <img src={filterId?.productImgs?.[0]} alt="" className='img-fluid' style={{ width: '250px', height: '250px' }} />                    
                </div>
                <div>
                    <h2>{filterId?.title}</h2>
                    <p style={{ textAlign: 'justify' }} className='container'>{filterId?.description}</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="fa-solid fa-circle-minus" style={{ cursor: 'pointer' }} onClick={desCount}></i>
                        <span>{quantity}</span>
                        <i className="fa-solid fa-circle-plus" style={{ cursor: 'pointer' }} onClick={count}></i>
                    </div>
                    <Button variant="primary" style={{borderRadius:'.5rem', width:'300px', marginTop:'.5rem'}} onClick={addCarts}>Add cart</Button>
                </div>
            </div>
            <div className='container my-5'>
                <h2>Product Suggestion</h2>
                <ul >
                    {
                        productSug.map(producSugg => (
                            <li onClick={() => navigate(`/productdetails/${producSugg.id}`)} key={producSugg.id}>{producSugg.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;