// src/Dado.js
import React from 'react';

const Dado = ({ valor }) => {
  const imagens = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'
  ];

  return (
    <div>
      <img src={`/${imagens[valor - 1]}`} alt={`Dado valor ${valor}`} />
    </div>
  );
};

export default Dado;
