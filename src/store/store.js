import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Reducers/counterReducer'

const store = configureStore({
    reducer: {
        counter: counterSlice,
     } //add reducers here
})

export default store;