import { Link } from 'react-router-dom';
import'./index.css';

function novojogo() {
    return(

        <div className='tudo-opica'>
            <div className='central-opicao'>

                <img className='img-opicao' src='assets/img/fundo-madera.png'/>

                    <h1 className='novojogo-opicao'>Novo jogo</h1>

             
                  <button className='seve1-opicao'>seve 1</button>
                  <button className='seve2-opicao'>seve 2</button>
                  <button className='seve3-opicao'> seve 3</button>

                  <Link to="/" className='sair-novojog'>
                  <button className='sair-novojogo'></button>
                  </Link>

            </div>

        </div>

    );
}

export default novojogo;