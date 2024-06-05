// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/habitaciones">Habitaciones</Link>
        </li>
        <li>
          <Link to="/reservas">Reservas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
