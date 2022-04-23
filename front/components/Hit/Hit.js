import { useState } from "react";

const Hit = ({ hit, functions }) => {
    const [item] = useState({
        id: hit.objectID,
        title: hit.name,
        price: hit.salePrice,
        img: hit.image
    });

    let button;

    const hasItem = functions.cart.items.find((item) => item.id === hit.objectID);

    if (functions.cart.items.length === 0 || !hasItem)
        button = (
            <button id="add" onClick={() => functions.addItemtHandler(item)}>
                Ajouter
            </button>
        );
    else
        button = (
            <button id="remove" onClick={() => functions.removeItemHandler(item)}>
                Supprimer
            </button>
        );

    return (
        <section>
            <div>
                <img src={hit.image} />
            </div>
            <h4>{hit.name}</h4>
            <p>{hit.salePrice}</p>
            {button}
        </section>
    );
};

export default Hit;
