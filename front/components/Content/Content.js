import { Hits } from "react-instantsearch-dom";

// Components
import Hit from "../../components/Hit/Hit";

const Content = () => {
    return (
        <div>
            <Hits hitComponent={Hit} />
        </div>
    );
};

export default Content;
