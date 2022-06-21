import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import catFoodProducts from '../../data/products';

const initialState = catFoodProducts;

export const productListSlice = createSlice({
  name: 'productsCards',
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {

  },
});

export const { } = productListSlice.actions;

export default productListSlice.reducer;
