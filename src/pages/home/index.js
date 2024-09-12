// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './index.css';

// function Home() {
//   const navigate = useNavigate();

//   const handleNovoJogoClick = () => {
//     navigate('/opcao');
//   };

//   return (
//     <div className="container-home">
// <div className='IMG'>
//      <div className='container-h1'>
//           <h1 className='titulo-home'>WUKONG</h1>
//           <h1 className='tituo-home2'>o despertar</h1> 
//      </div>

//       <div className='botao-home'>
//         <button className='jogar-butom'>
//           <img className="imagem-botao-jogar" src='https://cdn.discordapp.com/attachments/1240374436071473224/1250554098671943764/jogar.png?ex=66749743&is=667345c3&hm=64f1b60503a603b2ba39aa296c7fba395321cf99242af5f2c307d3d5d8c73de8&' />
//         </button>

//         <button className='novo-jogo-butom' >
//           <img className="imagem-novo-jogar" src='https://cdn.discordapp.com/attachments/1219092174063403089/1232795209851732191/1713991542711.png?ex=66749582&is=66734402&hm=f8ea76f5d7ce2cbfd6ef2d35b9f8d5ed857e6e8c5a639bdf4012df9744de6f62&' />
//         </button>

//         <button className='opicoes' onClick={handleNovoJogoClick}> 
//           <img className="imagem-opicoes" src="https://cdn.discordapp.com/attachments/1219092174063403089/1231707793795317831/1713732390087.png?ex=66749546&is=667343c6&hm=3d1c6fbf7a650b0214d8e4e978cb2c911f5ab80d48fa04e594c8ceba3c9d15ca&" />
//         </button> 
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// Home.js


// import './index.css';

// function Home() {


//   return (
//     <div className="container-home">
//       <div className='IMG'>
//         <div className='container-h1'>
//           <h1 className='titulo-home'>WUKONG</h1>
//           <h1 className='tituo-home2'>o despertar</h1> 
//         </div>

//         <div className='botao-home'>
//           <button className='jogar-butom'>
//             <img className="imagem-botao-jogar" src='https://cdn.discordapp.com/attachments/1240374436071473224/1250554098671943764/jogar.png?ex=66749743&is=667345c3&hm=64f1b60503a603b2ba39aa296c7fba395321cf99242af5f2c307d3d5d8c73de8&' />
//           </button>

//           <button className='novo-jogo-butom'>
//             <img className="imagem-novo-jogar" src='https://cdn.discordapp.com/attachments/1219092174063403089/1232795209851732191/1713991542711.png?ex=66749582&is=66734402&hm=f8ea76f5d7ce2cbfd6ef2d35b9f8d5ed857e6e8c5a639bdf4012df9744de6f62&' />
//           </button>

//           <button className='opicoes' >
//             <img className="imagem-opicoes" src="https://cdn.discordapp.com/attachments/1219092174063403089/1231707793795317831/1713732390087.png?ex=66749546&is=667343c6&hm=3d1c6fbf7a650b0214d8e4e978cb2c911f5ab80d48fa04e594c8ceba3c9d15ca&" />
//           </button>
//         </div>
//       </div>
//       </div>

//   );
// }

// export default Home;
import React, { useState } from 'react';
import './index.css';

function Home() {
  const [isJogarClicked, setIsJogarClicked] = useState(false);

  const handleJogarClick = () => {
    setIsJogarClicked(true);
    setTimeout(() => setIsJogarClicked(false), 200); // Tempo de exibição da imagem ao clicar
  };

  const [isNovoClicked, setIsNovoClicked] = useState(false);

  const handlNovoClick = () => {
    setIsNovoClicked(true);
    setTimeout(() => setIsNovoClicked(false), 200); // Tempo de exibição da imagem ao clicar
  };

  return (

    <div className="container-home">

    
        <div className='container-h1'>
          <h1 className='titulo-home'>WUKONG</h1>
          <h1 className='tituo-home2'>o despertar</h1>
        </div><div className='botao-home'>

        <button className='jogar-butom' onClick={handleJogarClick}>
            <img
              className="imagem-botao-jogar"
              src={isJogarClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/jogar-normal.png'}
              alt="Jogar"
            />
          </button>


          <button className='jogar-butom' onClick={handlNovoClick}>
            <img
              className="imagem-botao-jogar"
              src={isNovoClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/novojogar-normal.png'}
              alt="Jogar"
            />
          </button>

          <button className='opicoes'>
            <img className="imagem-opicoes" src="/assets/img/botao-tres-orizontal.png" alt="Opções" />
          </button>
        </div>
      </div>

  );
}

export default Home;