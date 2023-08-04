import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './Redux/Items/itemsSlice';
import menuSlice from './Redux/Menu/menuSlice';
import whastappSlice from './Redux/WhatsApp/whatsappSlice';

const store = configureStore({
  reducer: {
    items: itemsSlice,
    menu: menuSlice,
    whatsapp: whastappSlice,
  },
});

export default store;
