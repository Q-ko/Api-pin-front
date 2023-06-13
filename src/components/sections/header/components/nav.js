function Nav(promps) {
    return (
        <nav class="navbar navbar-expand-lg d-flex felx-column">
            <div class="container">
                <Barnd nameBrand="CHILLING" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="d-felx w-100">
                        <div class="navbar-nav d-flex justify-content-end w-100">
                            <Links nameLink="Home" />
                            <Links nameLink="Nosotros" />
                            <Links nameLink="Contacto" />
                            <Links nameLink="Productos" />
                            <Links nameLink="algoMas" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function Barnd(promps) {
    return (
        <a class="navbar-brand" href="#">{promps.nameBrand}</a>
    )
}

function Links(promps) {
    return (
        <a class="nav-link" href="#">{promps.nameLink}</a>
    )
}


export default Nav;