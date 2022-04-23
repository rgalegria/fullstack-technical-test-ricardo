import { useState } from "react";

const Hit = ({ hit, functions }) => {
    const [item] = useState({
        id: hit.objectID,
        title: hit.name,
        price: hit.salePrice,
        img: hit.image
    });

    return (
        <section>
            <div>
                <img src={hit.image} />
            </div>
            <h4>{hit.name}</h4>
            <p>{hit.salePrice}</p>
            <button id="add" onClick={() => functions.addItemtHandler(item)}>
                Ajouter
            </button>
            <button id="remove" onClick={() => functions.removeItemHandler(item)}>
                Supprimer
            </button>
        </section>
    );
};

export default Hit;
