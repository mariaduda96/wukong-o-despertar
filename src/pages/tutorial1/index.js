import React, { useState, useEffect } from 'react';
import './index.css';
import Personagem from '../../components/hero';

const Tutorial1 = () => {
  const [position, setPosition] = useState(1500); // Posição do personagem
  const [isMovingLeft, setIsMovingLeft] = useState(false);
  const [isMovingRight, setIsMovingRight] = useState(false);
  const backgroundWidth = 2790;
  const characterWidth = 50; 

  // Define a imagem correta com base no movimento
  const getImagem = () => {
    if (isMovingRight) return 'assets/img/Wukong andando direita.gif';
    if (isMovingLeft) return 'assets/img/Wukong_andando_esuqerda.gif';
    return 'assets/img/Wukong_parado_animacao.gif';
  };

  const moveCharacter = () => {
    if (isMovingLeft) {
      setPosition((prev) => Math.max(prev - 10, 600)); // Limita à borda esquerda
    }
    if (isMovingRight) {
      setPosition((prev) => Math.min(prev + 10, backgroundWidth - characterWidth)); // Limita à borda direita
    }
  };

  // Chama moveCharacter regularmente para atualizar a posição
  useEffect(() => {
    const interval = setInterval(moveCharacter, 100);
    return () => clearInterval(interval);
  }, [isMovingLeft, isMovingRight]);

  // Detecta teclas para movimento
 const handleKeyDown = (event) => {
  if (event.key === 'a' || event.key === 'ArrowLeft') setIsMovingLeft(true);
  if (event.key === 'd' || event.key === 'ArrowRight') setIsMovingRight(true);
};

const handleKeyUp = (event) => {
  if (event.key === 'a' || event.key === 'ArrowLeft') setIsMovingLeft(false);
  if (event.key === 'd' || event.key === 'ArrowRight') setIsMovingRight(false);
};

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  };
}, []);

  return (
    <div className="tudotutorial" style={{ overflow: 'hidden' }}>
      <img
        className="img-tutorial1"
     A   src="assets/img/fundo_1_final_completo.jpg"
        alt="Fundo-tutorial1"
        style={{ transform: `translateX(-${position}px)`, transition: 'transform 0.1s' }}
      />

      <div style={{ position: 'relative', left: `${position}px`, transition: 'left 0.1s' }}>
        <Personagem imagem={getImagem()} />
      </div>
    </div>
  );
};

export default Tutorial1;
