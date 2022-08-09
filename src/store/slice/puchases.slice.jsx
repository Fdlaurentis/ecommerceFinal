import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConf';
import { setIsLoading } from './isLoading.slice';


export const puchasesSlice = createSlice({
    name: 'puchases',
    initialState: [],
    reducers: {
        setPuchases:(state, action)=>{
            const puchases=action.payload
            return puchases
        }
    }
})

export const getPuchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then(res => dispatch(setPuchases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPuchases } = puchasesSlice.actions;

export default puchasesSlice.reducer;
