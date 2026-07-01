import './ButtonTags.css';

function ButtonTags({ tags, funcaoSetag, tagSelecionada }) {

    return (
        <div className="Tags">

            {tags.map(tag => (

                <button
                    key={tag}
                    className={`buttonTags ${
                        tagSelecionada === tag ? "ativo" : ""
                    }`}
                    onClick={() => funcaoSetag(tag)}
                >
                    {tag}
                </button>
                

            ))}

        </div>
    );
}
export default ButtonTags;