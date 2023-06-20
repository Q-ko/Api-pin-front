import { useRouteError, Link } from "react-router-dom"


export const NotFound = () => {

    const error = useRouteError();
    console.log(error);


    return (
        <div>
            <h1>Error 404</h1>
            <Link to="/">Volver al Home</Link>
        </div>
    );

};