import Inicio from "../Secciones/contenidoSeccion/inicio"
import Acerca from "../Secciones/contenidoSeccion/acercaDeNosotros"
import Portfolio from "../Secciones/contenidoSeccion/Portfolio/portfolio"
import Contacto from "../Secciones/contenidoSeccion/contactanos"

export default function Secciones() {
    return (
        <>
            <section id="inicio">
                <Inicio/>
            </section>

            <section id="acerca-de">
                <Acerca/>
            </section>

            <section id="portfolio">
                <Portfolio/>
            </section>

            <section id="contacto">
                <Contacto/>
            </section>
        </>
    );
}
