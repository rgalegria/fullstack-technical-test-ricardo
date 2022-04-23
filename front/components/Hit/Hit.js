import { useState } from "react";

// Styles
import styles from "../../styles/Hit.module.css";

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
            <button id="add" className={styles.add_btn} onClick={() => functions.addItemtHandler(item)}>
                Ajouter
            </button>
        );
    else
        button = (
            <button id="remove" className={styles.remove_btn} onClick={() => functions.removeItemHandler(item)}>
                Supprimer
            </button>
        );

    return (
        <section key={hit.objectID} className={styles.section}>
            <div className={styles.img_container}>
                <img className={styles.img} src={hit.image} />
            </div>
            <h4 className={styles.title}>{hit.name}</h4>
            <p className={styles.price}>{hit.salePrice}</p>
            {button}
        </section>
    );
};

export default Hit;
