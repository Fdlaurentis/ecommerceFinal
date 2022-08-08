import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'
import productSlice from './slice/product.slice'

export default configureStore({
  reducer: {
        isLoding: isLoadingSlice,
        products: productSlice
	}
})