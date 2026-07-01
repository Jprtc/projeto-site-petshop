import ButtonTags from "../../Components/ButtonTags/ButtonTags";
import TagCard from "../../Components/TagCards/TagCard";
import tagCard from "../../Data/tagDB";
import { useState } from "react";
import './DicsPart.css';

function DicsParts(){
    
    const [tagSelecionada, setTagSelecionada] = useState("Cachorro");
    
    const tagFiltrada = tagCard.filter( tagf => tagf.tag.includes(tagSelecionada))
    
    const tags = [
    ...new Set(tagCard.flatMap(card => card.tag))
    ];  

    return(
        <section className="dicasContainer">
            <h1 className="TituloDicas">Dicas de quem entende!</h1>

            <ButtonTags 
                tags={tags}
                funcaoSetag={setTagSelecionada}
                tagSelecionada={tagSelecionada}
            />
            
            <div className="cardsDicas">
                {tagFiltrada.map(card => (
                <TagCard
                key={card.nome}
                nome={card.nome}
                caminhoImagem={card.caminhoImagem}
            />
            ))}
            </div>  
        </section>
    )

}

export default DicsParts;