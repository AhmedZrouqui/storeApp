import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";


export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
        try{
            const data = axios.get(`http://localhost:5000/user/list`)
            if((await data).status === 200) return {status: 'success', data:(await data).data}
        }catch(err){
            return {status: 'failed'}
        }
    }
)


// @ts-ignore
export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        //reducers
    },
    extraReducers:{
        // Add reducers for additional action types here, and handle loading state as needed
        [getAllUsers.pending] : (state, action) => {
            state = action.payload
        },

        [getAllUsers.fulfilled] : (state, action) => {
            state = action.payload
        },
    },
});

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer;