import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilterThunk, getProductThunk } from '../store/slice/product.slice';


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")


    const products = useSelector((state) => state.products)


    useEffect(() => {
        dispatch(getProductThunk())
    }, [])
    
    const search=e=>{
        e.preventDefault()
        dispatch(getFilterThunk(searchValue))
    }

    return (
        <div className='container my-5'>
            <h1>Home</h1>
            <form onSubmit={search}>
                <input 
                    type="text" 
                    placeholder='Search for name'
                    onChange={e=>setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <button>Search</button>
            </form>

            <div className='contFlex my-5'>
                {
                    products.map(product => (
                        < div className="card" style={{ width: "18rem", cursor: 'pointer' }} key={product.id} onClick={() => navigate(`/productdetails/${product.id}`)}>
                            <div className='divImg'>
                                <img src={product.productImgs[0]} className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;