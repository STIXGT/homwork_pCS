// src/components/Clientes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clientes = () => {
  const [clientes, setClientes] = useState([

  ]);

  useEffect(() => {
    axios.get('http://localhost:5000/clientes')
      .then(response => {
        setClientes(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Hubo un error al obtener los clientes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente[0]}>
            {cliente[1]} ------- {cliente[2]} --------- {cliente[3]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
