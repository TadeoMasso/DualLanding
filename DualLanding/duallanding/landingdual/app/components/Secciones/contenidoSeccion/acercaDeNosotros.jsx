import Image from "next/Image"

export default function Nosotros() {

    const nosotrosEze = {
        //agregar luego un icono con la url del portfolio personal
        texto: "texto sobre nosotros",
        redes: "link de redes",
        contacto: "datos de contacto",
        foto: "url foto",
        certificado: "url certificado"

    }

    const nosotrosTade = {
        //agregar luego un icono con la url del portfolio personal
        texto: "texto sobre nosotros",
        redes: "link de redes",
        contacto: "datos de contacto",
        foto: "url foto",
        certificado: "url certificado"
    }


    return (
        <>
            <h1>
                Acerca de Nosotros
            </h1>

            {/* Acerca de Tade */}
            <div className="conteiner style">
                <Image src={nosotrosTade.foto} width={400} height={400} alt="foto Tadeo" />

                <h2> "te cuento un poco de mi pito:"{nosotrosTade.texto}</h2>
                <div>
                    Mis Redes:{nosotrosTade.redes}
                </div>
                <div>
                    Certificados:{nosotrosTade.certificado}
                </div>
                <div>
                    Contactame: {nosotrosTade.contacto}
                </div>
            </div>

            {/* Acerca de Eze */}
            <div className="conteiner style">
                <Image src={nosotrosEze.foto} width={400} height={400} alt="foto Ezequiel" />
                <h2> "te cuento un poco de mi pito:"{nosotrosEze.texto}</h2>
                <div>
                    Mis Redes : {nosotrosEze.redes} 
                </div>
                <div>
                    Contactame: {nosotrosEze.contacto}
                </div>
            </div>


        </>





    )



}