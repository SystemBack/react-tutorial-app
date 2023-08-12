import { Link, useRouteError } from "react-router-dom";

const NotFound =  (  ) => {
    const error = useRouteError();
    return (
        <div>
            <h3 style={{fontSize: 40}}>{error.status}</h3>
            <h6>Ops! Something when wrong.</h6>
            <p>{error.data}</p>
            <Link to="/">
                <button type="button">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;