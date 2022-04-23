import { useState } from "react";

// Styles
import styles from "../../styles/Hit.module.css";

const Hit = ({ hit }) => {
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
        </section>
    );
};

export default Hit;
