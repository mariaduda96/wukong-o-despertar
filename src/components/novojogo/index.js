
import { Link } from 'react-router-dom';
import'./index.css';

function novojogo() {
    return(

        <div className='tudo-opica'>
            <div className='central-opicao'>

                <img className='img-opicao' src='assets/img/fundo-madera.png'/>

                    <h1 className='novojogo-opicao'>Novo jogo</h1>

             
                  <button className='save1-opicao'>save 1</button>
                  <button className='save2-opicao'>save 2</button>
                  <button className='save3-opicao'> save 3</button>

                  <Link to="/" className='sair-novojog'>
                  <button className='sair-novojogo'></button>
                  </Link>

            </div>

        </div>

    );
}

export default novojogo;