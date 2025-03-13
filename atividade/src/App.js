// src/App.js
import React, { useState } from 'react';
import Dado from './Dado'; // Importando o componente Dado

const App = () => {
  const [valor, setValor] = useState(1);

  const gerarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    setValor(numero);
  };

  return (
    <div>
      <h1>Jogo do Dado</h1>
      <Dado valor={valor} /> {/* Passando o valor do dado */}
      <button onClick={gerarNumeroAleatorio}>Jogar Dado</button>
    </div>
  );
};

export default App;
