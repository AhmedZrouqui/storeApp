import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";


export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
        try{
            return await fetch(`http://localhost:5000/users/`).then((res) => res.json());
        }catch(err){
            console.log(err)
        }
    }
)


// @ts-ignore
export const userSlice = createSlice({
    name: 'user',
    initialState: { entities: {}, loading: 'idle' },
    reducers: {
        //reducers
    },
    extraReducers:{
        // Add reducers for additional action types here, and handle loading state as needed
        [getAllUsers.pending] : (state, action) => {
            state.loading = 'loading'
        },

        [getAllUsers.fulfilled] : (state, action) => {
            state.entities = action.payload
        },
    },
});

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer;