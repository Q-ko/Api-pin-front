import React, { useEffect } from "react"

import {
    BrowserRouter,
    Route,
    NavLink,
    Routes,
    useLocation,
} from "react-router-dom";

function Nav({ setIsHome }) {

    const location = useLocation();

    useEffect(() => {
        setIsHome(location.pathname === "/");
    }, [location.pathname, setIsHome]);

    return (
        <header className='d-flex flex-column '>
            <nav class="navbar navbar-expand-lg d-flex felx-column">
                <div class="container">
                    <Barnd nameBrand="CHILLING" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="d-felx w-100">
                            <div class="navbar-nav d-flex justify-content-end w-100">
                                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                                <NavLink to="/productos" className="nav-link">Productos</NavLink>
                                <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                                <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                                {/* <a href="http://"></a>
                            <a class="nav-link active" aria-current="page" Link to='/'>Home</a>
                            <a class="nav-link" Link to="/nosotros">Nosotros</a>
                            <a class="nav-link" href="/contacto">Contacto</a>
                            <a class="nav-link" href="/productos">Productos</a>
                            <a class="nav-link" href="#">Algo Mas</a> */}


                                {/* <Links nameLink="Home" />
                            <Links nameLink="Nosotros" />
                            <Links nameLink="Contacto" />
                            <Links nameLink="Productos" />
                            <Links nameLink="AlgoMas" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function Barnd(promps) {
    return (
        <a class="navbar-brand" href="#">{promps.nameBrand}</a>
    )
}

/* function Links(promps) {
    return (
        <a class="nav-link" href="#">{promps.nameLink}</a>
    )
} */


export default Nav;