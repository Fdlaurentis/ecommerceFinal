import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilterCategoryThunk, getFilterThunk, getProductThunk } from '../store/slice/product.slice';


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [categories, sertCategories] = useState([])
    const products = useSelector((state) => state.products)


    useEffect(() => {
        dispatch(getProductThunk())
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => sertCategories(res.data.data.categories))
    }, [])

    const search = e => {
        e.preventDefault()
        dispatch(getFilterThunk(searchValue))
    }

    return (
        <div className='container my-5'>
            <div className='contHome' style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <h1>Home</h1>
                <form onSubmit={search}>
                    <input
                        type="text"
                        placeholder='Search for name'
                        onChange={e => setSearchValue(e.target.value)}
                        value={searchValue}
                    />
                    <button>Search</button>
                </form>
            </div>
            <div className='contHome'>
                <div className='divfilter my-5'>
                    <h3>Category</h3>
                    <ul >
                        <li>All Products</li>
                        {                                            
                            categories.map(category => (
                                <li
                                    key={category.id}
                                    onClick={() => {
                                            console.log(category.id)
                                            dispatch(getFilterCategoryThunk(category.id))
                                            
                                        }
                                    }
                                    style={{cursor:'pointer'}}
                                >
                                    {category.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='contFlex my-5'>
                    {
                        products.map(product => (
                            < div className="card" style={{ width: "18rem", cursor: 'pointer' }} key={product.id} onClick={() => navigate(`/productdetails/${product.id}`)}>
                                <div className='divImg'>
                                    <img src={product.productImgs[0]} className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Price: {product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;