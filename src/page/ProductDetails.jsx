import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slice/product.slice';

const ProductDetails = () => {

    const allItems=useSelector(state=>state.products)
    const [filterId, setFilterId]= useState({})
    const [productSug, setProductSug]=useState([])
    const { id } =useParams()
    const dispatch=useDispatch()

    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getProductThunk())
    },[])

    useEffect(()=>{
        const newProducts= allItems.find(newProduct=> newProduct.id === Number(id))
            setFilterId(newProducts)
        const productFiletrs = allItems.filter(producFilter=> producFilter.category.id === newProducts.category.id)
            setProductSug(productFiletrs)
    },[allItems, id])


    return (
        <div className='container' style={{alignItems:'center'}}>
            <h1>Product Deatails</h1>
            <h2>{filterId?.title}</h2>
            <img src={filterId?.productImgs?.[0]} alt="" />

            <h2>Product Suggestion</h2>
            <ul>
                {
                    productSug.map(producSugg=>(
                        <li onClick={()=>navigate(`/productdetails/${producSugg.id}`)} key={producSugg.id}>{producSugg.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductDetails;