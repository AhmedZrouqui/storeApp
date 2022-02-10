import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
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
            const data = axios.get(`${process.env.API_URL}/products/homeList`)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async(options: any, thunkAPI) => {
        try{
            const {product} = options
            console.log(options)
            const data = axios.post(`${process.env.API_URL}/products/addOne`, product)
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

        builder.addCase(addProduct.pending, (state, action) => {
            state.loading = true
            state.error = false
            state.products = []
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.products = action.payload
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.products = []
        })
    },
});

// exporting the reducer here, as we need to add this to the store
export default productSlice.reducer;