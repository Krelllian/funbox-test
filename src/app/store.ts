import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ProductListReducer from '../features/ProductList/productListSlice';

export const store = configureStore({
  reducer: {
    productList: ProductListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
