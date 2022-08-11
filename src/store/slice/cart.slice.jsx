import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConf from '../../utils/getConf'
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart:(state, action)=>{
            const cart =action.payload
            return cart
        }

    }
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/cart', getConf())
        .then(res => dispatch(setCart(res.data.data.cart.products)))    
        .finally(() => dispatch(setIsLoading(false)));        
}

export const addCartThunk = addCart => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', addCart, getConf())
        .then(()=>dispatch(getCartThunk()))    
        .finally(() => dispatch(setIsLoading(false)));        
}

export const buyCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {}, getConf())
        .then(()=>dispatch(setCart([])))    
        .finally(() => dispatch(setIsLoading(false)));        
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
