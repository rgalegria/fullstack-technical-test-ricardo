import { connectHits } from "react-instantsearch-dom";

// Components
import Hits from "../../components/Hits/Hits";
const CustomHits = connectHits(Hits);

const Content = (props) => {
    return (
        <>
            <div>
                <CustomHits functions={props.data} />
            </div>
        </>
    );
};

export default Content;
