import Element1 from "./components/element1";
import Element2 from "./components/elemento2";

function Main(promps) {
    return (
        <main className='d-flex flex-column white-background'>
            <section className='vh-100 '>
                <Element1 />
            </section>
            <section className='vh-100'>
                <Element2 />
            </section>
        </main>
    )
}

export default Main;