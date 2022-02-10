import {
    configureStore,
    ThunkDispatch,
    Action
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import userReducer from './userSlice';
import productsReducer from './productSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
    reducer: {
        category : categoryReducer,
        user: userReducer,
        products: productsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
