import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { IProduct } from '../pages/types/products.type';

interface CartSliceState {
    cart: IProduct[]
    loading: boolean,
    error: boolean,
}

const initialState : CartSliceState = {
    cart: [],
    loading: false,
    error: false,    
}

export const getCart = createAsyncThunk(
    'cart/getCart',
    async(options, thunkAPI) => {
        try{
            let payload = options
            const data = axios.get(`${process.env.API_URL}/cart/getCart`)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.reponse.data)
        }
    }
)