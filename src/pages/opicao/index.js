import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Opicao() {
  return (
    <div className="divcentral-opicaofora">
      <img className='img-opicao' src='assets/img/fundo-madera.png' alt="Fundo" />

      <button className='creditos-opicaofora'>Créditos</button>

       <Link to="/opicoesfora" className='opcao-opicaofor'>
      <button className='opcao-opicaofora'>Opção</button>
      </Link>

        <button className='voltamenu1-opicaofora'></button>
       
        <Link to="/" className='duvidas1-opicaofor'>
      <button className='cancelar1-opicaofora'></button>
      </Link>
      
      <button className='duvidas1-opicaofora'></button>
      
    </div>
  );
}

export default Opicao;