import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { IProduct } from '../pages/types/products.type';

interface ProductSliceState {
    products: IProduct[],
    loading: boolean,
    error: boolean,
}

const initialState : ProductSliceState = {
    products: [],
    loading: false,
    error: false,
}


export const getHomeProducts = createAsyncThunk(
    'products/getHomeProducts', 
    async (options, thunkAPI) => {
        try{
            const data = axios.get(`http://localhost:5000/product/homeList`)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


// @ts-ignore
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getHomeProducts.pending, (state, action) => {
            state.loading = true
            state.error = false
            state.products = []
        })
        builder.addCase(getHomeProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.products = action.payload
        })
        builder.addCase(getHomeProducts.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.products = []
        })
    },
});

// exporting the reducer here, as we need to add this to the store
export default productSlice.reducer;