import { useParams } from "react-router-dom";


const Details = (  )  => {
    const { itemId } = useParams();
    

    return(
        <div>
            Event id is {itemId}
        </div>
    );
};

export default Details;