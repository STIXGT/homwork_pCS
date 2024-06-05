// src/components/Reservas.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/reservas')
      .then(response => {
        setReservas(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las reservas:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Reservas</h1>
      <ul>
        {reservas.map(reserva => (
          <li key={reserva[0]}>
            Cliente ID: {reserva[1]} - Habitación ID:{ reserva[2]} - 
            Inicio: {reserva[3]} - Fin: {reserva[4]} - Estado: {reserva[5]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
