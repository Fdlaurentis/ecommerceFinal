import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from './isLoading.slice';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {},
    reducers: {
        setLogin: (state, action) => {
            const login = action.payload
            return login
        }
    }
})

export const loginThunk = userLogin => (dispatch) => {
    
    dispatch(setIsLoading(true));
    
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', userLogin)
        .then(res => {
            localStorage.setItem('token', res.data.data.token)
           
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
