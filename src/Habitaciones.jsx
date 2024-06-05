// src/components/Habitaciones.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Habitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/habitaciones')
      .then(response => {
        setHabitaciones(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las habitaciones:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Habitaciones</h1>
      <ul>
        {habitaciones.map(habitacion => (
          <li key={habitacion[0]}>
            {habitacion[1]} - {habitacion[2]} - {habitacion[3]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habitaciones;
