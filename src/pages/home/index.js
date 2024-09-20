import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Corrigir a importação
import './index.css';

function Home() {
  const navigate = useNavigate(); // Usar useNavigate para navegação
  const [isJogarClicked, setIsJogarClicked] = useState(false);
  const [isNovoClicked, setIsNovoClicked] = useState(false);

  const handleJogarClick = () => {
    setIsJogarClicked(true);
    setTimeout(() => setIsJogarClicked(false), 200); 
  };

  const handleNovoClick = () => {
    setIsNovoClicked(true);
    setTimeout(() => {
      setIsNovoClicked(false); 
      navigate('/novojogo'); // Redireciona para a página após a animação
    }, 100); // Espera a animação ocorrer antes de redirecionar
  };

  return (
    <div className="container-home">
      <div className='container-h1'>
        <h1 className='titulo-home'>WUKONG</h1>
        <h1 className='tituo-home2'>O Despertar</h1>
      </div>

      <div className='botao-home'>
        
        <button className='jogar-butom' onClick={handleJogarClick}>
          <img
            className="imagem-botao-jogar"
            src={isJogarClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/jogar-normal.png'}
            alt="Jogar"
          />
        </button>

        <button className='jogar-butom' onClick={handleNovoClick}>
          <img
            className="imagem-botao-jogar"
            src={isNovoClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/novojogar-normal.png'}
            alt="Novo Jogo"
          />
        </button>

        <Link to="/opcao" className='opicoes'>
          <img className="imagem-opicoes" src="/assets/img/botao-tres-orizontal.png" alt="Opções" />
        </Link>
      </div>
    </div>
  );
}

export default Home;