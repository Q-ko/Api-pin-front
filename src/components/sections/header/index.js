import PagePrincipal from "./components/PagePrincipal";
import Nav from "./components/nav";

function Header(promps) {
    return (
        <header className='d-flex flex-column vh-100 fondo-de-img'>
            <section>
                <Nav />
            </section>
            <section className='d-flex flex-column h-100 '>
                <PagePrincipal />
            </section>
        </header>
    )
}
export default Header;