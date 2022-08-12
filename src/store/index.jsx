import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slice/cart.slice'
import isLoadingSlice from './slice/isLoading.slice'
import loginSlice from './slice/login.slice'
import productSlice from './slice/product.slice'
import puchasesSlice from './slice/puchases.slice'


export default configureStore({
  reducer: {
        isLoding: isLoadingSlice,
        products: productSlice,
        puchases: puchasesSlice,
        cart: cartSlice,
        login: loginSlice
	}
})