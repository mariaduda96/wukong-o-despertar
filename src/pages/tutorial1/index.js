// src/pages/tutorial1.js

import React from 'react';
import './index.css';
import Personagem from '../../components/hero';

const Tutorial1 = () => {
  return (
    <div className="tudotutorial">
      <Personagem />
      <img className='img-tutorial1' src='assets/img/fundo_completo.jpg' alt="Fundo-tutorial1" />
    </div>
  );
};

export default Tutorial1;