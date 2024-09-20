import { Link } from 'react-router-dom';
import'./index.css';

function opicoesfora() {
    return(

        <div className='tudo-opicoes'>
        <div className='central-novojogo'>

            <img className='img-novo-jogo' src='assets/img/fundo-madera.png'/>

            <h1 className='opicao-novojogo'>Opções</h1>
            
            <div className='audio'>
            <button className='madeira-novojogo'> Àudio </button>
             </div>

             <Link to="/opcao" className='sair-opicao'>
             <button className='sair-opicoesfora'></button>
             </Link>
        </div>
        </div>
    );
}

export default opicoesfora;