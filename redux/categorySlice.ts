import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { ICategory } from '../pages/types/category.type';

interface CategorySliceState {
    categories: ICategory[]
    loading: boolean,
    error: boolean,
}

const initialState : CategorySliceState = {
    categories: [],
    loading: false,
    error: false,    
}

export const getAllCategories = createAsyncThunk(
    'category/getAllCategories',
    async(options, thunkAPI) => {
        try{
            const data = axios.get(`${process.env.API_URL}/category/list`)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.loading = true
            state.error = false
            state.categories = []
        })
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.categories = action.payload
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.categories = []
        })
    }
})

export default categorySlice.reducer


