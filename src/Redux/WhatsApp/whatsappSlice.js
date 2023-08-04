import { createSlice } from '@reduxjs/toolkit';

const whatsappSlice = createSlice({
  name: 'whatsapp',
  initialState: {
    mensaje: '',
  },
  reducers: {
    setMensaje: (state, action) => {
      state.mensaje = action.payload;
    },
  },
});

export const { setMensaje } = whatsappSlice.actions;

export default whatsappSlice.reducer;
