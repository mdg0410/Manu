import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itemsSlice = createSlice({
  initialState,
  name: 'items',
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    removeItem: (state, action) => state.filter((item) => item.id !== action.payload),
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
