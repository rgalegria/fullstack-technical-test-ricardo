import { Highlight } from "react-instantsearch-dom";
import Hit from "../../components/Hit/Hit";

// Styles
import styles from "../../styles/Hits.module.css";

const Hits = ({ hits, functions }) => {
    return (
        <ol className={styles.container}>
            {hits.map((hit) => (
                <Hit key={hit.objectID} hit={hit} functions={functions} />
            ))}
        </ol>
    );
};

export default Hits;
