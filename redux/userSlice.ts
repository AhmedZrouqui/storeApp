import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import { IUser } from '../pages/types/user.type';

interface UserSliceState {
    user: IUser
    loading: boolean,
    error: boolean,
}

const initialState : UserSliceState = {
    user: {},
    loading: false,
    error: false,    
}


export const userAuth = createAsyncThunk(
    'user/userAuth', 
    async (options, thunkAPI) => {
        try{
            let payload = options
            const data = axios.post(`${process.env.API_URL}/user/auth`, payload)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (options, thunkAPI) => {
        try{
            let payload = options
            const data = axios.post(`${process.env.API_URL}/user/update`, payload)
            if((await data).status === 200) return (await data).data
        } catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


// @ts-ignore
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //reducers
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(userAuth.pending, (state, action) => {
            state.loading = true
            state.error = false
            state.user = {}
        })
        builder.addCase(userAuth.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.user = action.payload
        })
        builder.addCase(userAuth.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.user = {}
        })
        
        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true
            state.error = false
            state.user = {}
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.user = action.payload
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false
            state.error = true
            state.user = {}
        })
    },
});

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer;