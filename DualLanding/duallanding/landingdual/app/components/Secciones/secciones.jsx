import Inicio from "../Secciones/contenidoSeccion/inicio"
import Acerca from "../Secciones/contenidoSeccion/acercaDeNosotros"
import Portfolio from "../Secciones/contenidoSeccion/Portfolio/portfolio"
export default function Secciones() {
    return (
        <>
            <section id="inicio">
                {/* Contenido de la sección "Inicio" */}
                <Inicio/>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>

            <section id="acerca-de">
                {/* Contenido de la sección "Acerca de"  */}
                <Acerca/>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>

            <section id="portfolio">
                {/* Contenido de la sección "Portfolio" */}
                <Portfolio/>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>

            <section id="contacto">
                {/* Contenido de la sección "Contacto"  */}
                <h1>Contacto</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>
        </>
    );
}
