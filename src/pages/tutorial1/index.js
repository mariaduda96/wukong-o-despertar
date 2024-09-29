import React, { useState, useEffect } from 'react';
import './index.css';
import Personagem from '../../components/hero';

const Tutorial1 = () => {
  const [position, setPosition] = useState(0); // Posição do personagem
  const [isMovingLeft, setIsMovingLeft] = useState(false); // Estado para controlar a movimentação à esquerda
  const [isMovingRight, setIsMovingRight] = useState(false); // Estado para controlar a movimentação à direita
  const backgroundWidth = 1080; // Largura da imagem de fundo
  const characterWidth = 0; // Largura do personagem (ajuste conforme necessário)

  const moveCharacter = () => {
    if (isMovingLeft) {
      setPosition((prev) => Math.max(prev - 10, 0)); // Move para a esquerda, não passa do limite
    }
    if (isMovingRight) {
      setPosition((prev) => {
        const newPosition = prev + 10; // Nova posição se mover para a direita
        return Math.min(newPosition, backgroundWidth - characterWidth); // Não passa do limite
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(moveCharacter, 100); // Chama moveCharacter a cada 100ms
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [isMovingLeft, isMovingRight]);

  const handleKeyDown = (event) => {
    if (event.key === 'a') {
      setIsMovingLeft(true); // Inicia a animação para a esquerda
    } else if (event.key === 'd') {
      setIsMovingRight(true); // Inicia a animação para a direita
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'a') {
      setIsMovingLeft(false); // Para a animação à esquerda
    } else if (event.key === 'd') {
      setIsMovingRight(false); // Para a animação à direita
    }
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
        className='img-tutorial1'
        src='assets/img/fundo_completo.jpg'
        alt="Fundo-tutorial1"
        style={{ transform: `translateX(-${position}px)`, transition: 'transform 0.1s' }}
      />

      <img className='img-caverna-tutorial' src='assets/img/caverna.png' alt="Caverna" />
      
      <div style={{ position: 'relative', left: `${position}px`, transition: 'left 0.1s' }}>
        <Personagem />
      </div>
    </div>
  );
};

export default Tutorial1;
