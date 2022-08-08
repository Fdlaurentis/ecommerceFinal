import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts:(state, action)=>{
            const products=action.payload
            return products
        }

    }
})

export const getProductThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getFilterThunk = searchValue => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1//products?query=${searchValue}`)
        .then(res => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
