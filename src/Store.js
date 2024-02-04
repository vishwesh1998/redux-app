import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
  
const store = configureStore({
    reducer : {
        myCart : cartReducer
    }
})

export default store