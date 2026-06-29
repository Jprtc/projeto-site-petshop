import './ButtonTags.css';

function ButtonTags({ tags, funcaoSetag }) {

    return (
        <div className="Tags">
            {console.log(tags)}
            {tags.map(tag => (

                <button
                    key={tag}
                    className="buttonTags"
                    onClick={() => funcaoSetag(tag)}
                >
                    {tag}
                </button>
                

            ))}

        </div>
    );
}
export default ButtonTags;