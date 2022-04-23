import { Highlight } from "react-instantsearch-dom";
import Hit from "../../components/Hit/Hit";

const Hits = ({ hits, functions }) => {
    return (
        <ol>
            {hits.map((hit) => (
                <Hit key={hit.objectID} hit={hit} functions={functions} />
            ))}
        </ol>
    );
};

export default Hits;
