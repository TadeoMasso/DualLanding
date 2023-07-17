import Inicio from "../Secciones/contenidoSeccion/inicio"
import Acerca from "../Secciones/contenidoSeccion/acercaDeNosotros"
import Portfolio from "../Secciones/contenidoSeccion/Portfolio/portfolio"
import Contacto from "../Secciones/contenidoSeccion/contactanos"
import Sub from "../Secciones/contenidoSeccion/subInicio"

export default function Secciones() {
    return (
        <>
            <section id="inicio">
                {/* Contenido de la sección "Inicio" */}
                <Inicio/>
                <Sub/>
              
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
                <Contacto/>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>
        </>
    );
}
