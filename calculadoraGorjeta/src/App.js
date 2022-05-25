import React, { useState } from 'react';
import './App.css';

function calcular(valor, gorjeta) {
  return valor * ((gorjeta/100)+1)
}

function valorGorjeta(valor, gorjeta) {
  return valor * (gorjeta / 100)
}

function App() {

  const [ valor, setValor ] = useState('');
  const [ gorjeta, setGorjeta ] = useState('');

  return (
    < div >

      <h2>Calculadora de Gorjeta</h2>

      {valor !== '' &&
        <h1>Valor Calculado</h1>
      }
      <input placeholder='Valor Calculado' type="number" value={valor} onChange={(e)=>setValor(e.target.value)}></input>

      {gorjeta !== '' &&
        <h1>Porcentagem Gorjeta</h1>
      }
      
      <input placeholder='Porcentagem Gorjeta' type="number" value={gorjeta} onChange={(e)=>setGorjeta(e.target.value)}></input>

      {calcular(valor, gorjeta) > 0 &&
        <div className="barra"></div>
      }

      {calcular(valor, gorjeta) > 0 &&
        <h1>Valor calculado igual a {Math.round(valor)} reais</h1>
      }

      {calcular(valor, gorjeta) > 0 &&
        <h1>Valor da gorjeta igual a {Math.round(valorGorjeta(valor, gorjeta))} reais</h1>
      }

      {calcular(valor, gorjeta) > 0 &&
        <h1>Valor total igual a {Math.round(calcular(valor, gorjeta))} reais</h1>
      }
    
    </div>
  );
}

export default App;
