import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './index.css';

function Home() {
  const navigate = useNavigate(); 
  const [isJogarClicked, setIsJogarClicked] = useState(false);
  const [isNovoClicked, setIsNovoClicked] = useState(false);

  const audioRef = useRef(new Audio('/assets/audio/som de botao 1.mp3'));
  const opcoesAudioRef = useRef(new Audio('/assets/audio/abrindo o options v2.mp3'));

  // Função para tocar o áudio e iniciar a animação ao mesmo tempo
  const playAudioAndStartAnimation = () => {
    audioRef.current.currentTime = 0;  // Garantir que o áudio comece do início
    audioRef.current.play();  // Tocar áudio imediatamente

    setIsJogarClicked(true);  // Iniciar animação do botão

    // Espera o áudio terminar e depois navega
    audioRef.current.onended = () => {
      setIsJogarClicked(false); 
      navigate('/tutorial1');  
    };
  };

  const playNovoAudioAndNavigate = () => {
    audioRef.current.currentTime = 0;  
    audioRef.current.play();  

    setIsNovoClicked(true);  

    // Espera o áudio terminar e depois navega
    audioRef.current.onended = () => {
      setIsNovoClicked(false); 
      navigate('/novojogo');  
    };
  };

  const handleOpcoesClick = () => {
    opcoesAudioRef.current.currentTime = 0;  // Garantir que o áudio comece do início
    opcoesAudioRef.current.play();  // Tocar áudio imediatamente
  };

  const handleNovoClick = () => {
    playNovoAudioAndNavigate();  // Tocar áudio e iniciar animaçoao do botao "Novo Jogo"
  };

  const handleJogarClick = () => {
    playAudioAndStartAnimation();  // Tocar áudio e iniciar animaçao do botao "Jogar"
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

        <button className='novo-jogo-butom' onClick={handleNovoClick}>
          <img
            className="imagem-botao-jogar"
            src={isNovoClicked ? '/assets/img/novojogo-apertado.png' : '/assets/img/novojogar-normal.png'}
            alt="Novo Jogo"
          />
        </button>

        <Link to="/opcao" className='opicoes' onClick={handleOpcoesClick}>
          <img className="imagem-opicoes" src="/assets/img/botao-tres-orizontal.png" alt="Opções" />
        </Link>

      </div>
    </div>
  );
}

export default Home;
