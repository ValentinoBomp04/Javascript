import React from 'react';
import './App.css';
// import Hola from './components/hola_mundo';
// import Contador from './components/Contador'
import Listado from './components/Listado';


function Conversor() {
  return (
    <div className="App">
      <h1>Listado</h1>
      {/* <h1>Contador</h1> */}
     {/* <h1>Conversor Celsius a Fahrenheit</h1> */}
    {/* <Hola></Hola> */}
    {/* <Contador></Contador> */}
    <Listado></Listado>
    </div>
  );
}

export default Conversor;
