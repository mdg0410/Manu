import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMensaje } from '../Redux/WhatsApp/whatsappSlice';

export default function Contact() {
  const dispatch = useDispatch();
  const mensaje = useSelector((state) => state.whatsapp.mensaje);

  const handleChangeDescription = (e) => {
    dispatch(setMensaje(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensajeEncoded = encodeURIComponent(mensaje);
    const numeroTelefono = '++593 99 280 2725'; // Reemplaza con tu número de WhatsApp empresarial
    const enlaceWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeEncoded}`;
    dispatch(setMensaje(''));
    window.location.href = enlaceWhatsAppWeb;
  };

  return (
    <div>
      <div>
        <h3>Contact Me</h3>
        <p>Feel free to contact me at:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea name="description" placeholder="Enter your message" value={mensaje} onChange={handleChangeDescription} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
