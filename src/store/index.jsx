import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'
import productSlice from './slice/product.slice'
import puchasesSlice from './slice/puchases.slice'


export default configureStore({
  reducer: {
        isLoding: isLoadingSlice,
        products: productSlice,
        puchases: puchasesSlice
	}
})