import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import './index.css';

function Home() {
  const [isJogarClicked, setIsJogarClicked] = useState(false);

  const handleJogarClick = () => {
    setIsJogarClicked(true);
    setTimeout(() => setIsJogarClicked(false), 200); 
  };

  const [isNovoClicked, setIsNovoClicked] = useState(false);

  const handlNovoClick = () => {
    setIsNovoClicked(true);
    setTimeout(() => setIsNovoClicked(false), 200); 
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

          <Link to="/opcao" className='opicoes'>
          <button className='opicoes'>
            <img className="imagem-opicoes" src="/assets/img/botao-tres-orizontal.png" alt="Opções" />
          </button>
        </Link>

        </div>
      </div>

  );
}

export default Home;



// // Home.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './index.css';

// function Home() {
//   const [isJogarClicked, setIsJogarClicked] = useState(false);

//   const handleJogarClick = () => {
//     setIsJogarClicked(true);
//     setTimeout(() => setIsJogarClicked(false), 200); 
//   };

//   const [isNovoClicked, setIsNovoClicked] = useState(false);

//   const handleNovoClick = () => {
//     setIsNovoClicked(true);
//     setTimeout(() => setIsNovoClicked(false), 200); 
//   };

//   return (
//     <div className="container-home">
//       <div className='container-h1'>
//         <h1 className='titulo-home'>WUKONG</h1>
//         <h1 className='tituo-home2'>o despertar</h1>
//       </div>
//       <div className='botao-home'>
//         <button className='jogar-botom' onClick={handleJogarClick}>
//           <img
//             className="imagem-botao-jogar"
//             src={isJogarClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/jogar-normal.png'}
//             alt="Jogar"
//           />
//         </button>

//         <button className='jogar-botom' onClick={handleNovoClick}>
//           <img
//             className="imagem-botao-jogar"
//             src={isNovoClicked ? '/assets/img/jogar-apertado.png' : '/assets/img/novojogar-normal.png'}
//             alt="Novo"
//           />
//         </button>


//         <Link to="/opicao" className='opicoes'>
//           <button className='opicoes'>
//             <img className="imagem-opicoes" src="/assets/img/botao-tres-orizontal.png" alt="Opções" />
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
