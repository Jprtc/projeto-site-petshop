import { Link } from 'react-router-dom';
import tagCard from '../../Data/tagDB.js';
import './TagCards.css'

function TagCard({nome, caminhoImagem}){

    return(
        <button className='CardTag'>
            <img src={caminhoImagem} alt={`Ir para a pagina do jogo ${nome}`}/>
            <h2>{nome}</h2>
            <h3>Ler Mais</h3>
        </button> 
    )
}
export default TagCard;