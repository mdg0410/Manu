import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './Redux/Items/itemsSlice';
import menuSlice from './Redux/Menu/menuSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
    menu: menuSlice,
  },
});

export default store;
