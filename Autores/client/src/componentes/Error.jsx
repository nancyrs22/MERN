import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h4>No encontramos al autor, intenta darlo de alta</h4>
            <Link to="/nuevo" className="btn btn-success">Crea un nuevo Autor</Link>
            <Link to="/" className="btn btn-success">Back Home</Link>
        </div>
    )
}

export default Error;