// components/hero.js

import React from 'react';
import './index.css';

const Personagem = ({ imagem }) => {
  return (
    <div>
      <img className="png-wukong" src={imagem} alt="wukong" />
    </div>
  );
};

export default Personagem;
