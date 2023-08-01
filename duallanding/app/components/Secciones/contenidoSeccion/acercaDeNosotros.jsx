import Image from "next/image"


export default function Nosotros() {


  //Agregar datos
  const nosotros = [
    {
      //agregar luego un icono con la url del portfolio personal
      nombre: "Tadeo Massó",
      puesto: "Full Stack Developer",
      texto: "Hola! Soy Tadeo, como leiste anteriormente soy Developer Full Stack. La verdad fue un camino dificl llegar hasta aca, lleno de problemas y desafios, pero gracias a mis habilidades y a mis compañeros pude seguir adelante. Estoy muy orgulloso de poder seguir adelante y en este caso poder trabajar con Eze codo a codo. Espero disfruten del proyecto y ante cualquier duda pueden comunicarse con nosotros",
      redes: "link de redes",
      contacto: "datos de contacto",
      foto: "/img/ejemploFoto.svg",
      certificado: "url certificado"
    },
    {
      nombre: "Ezequiel Zungri",
      puesto: "Full Stack Developer",
      texto: "Hola! Soy Tadeo, como leiste . La verdad fue un camino dificl llegar hasta aca, lleno de problemas y desafios, pero gracias a mis habilidades y a mis compañeros pude seguir adelante. Estoy muy orgulloso de poder seguir adelante y en este caso poder trabajar con Eze codo a codo. Espero disfruten del proyecto y ante cualquier duda pueden comunicarse con nosotros",
      redes: "link de redes",
      contacto: "datos de contacto",
      foto: "/img/ejemploFoto.svg",
      certificado: "url certificado"
    }

  ]


  return (
    <section  className="bg-gray-700">
      <div className="flex m-4 h-screen
       " >
        <div className="flex flex-row  rounded-md  ">
          <div className="w-1/3 flex flex-col items-center justify-center bg-blue-200 p-4 ">
            <div className="w-32 h-80 mb-4">
              <Image src={nosotros[0].foto} alt="Mi foto" width={128} height={128} />
            </div>
            <h1 className="text-2xl font-bold">{nosotros[0].nombre}</h1>
            <h2 className="text-lg font-semibold">{nosotros[0].puesto}</h2>
            <div className="flex space-x-4">
              <a href="URL_DE_LINKEDIN"><Image src="/svg/Linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
              <a href="URL_DE_GITHUB"><Image src="/svg/Github.svg" alt="GitHub" width={24} height={24} /></a>
              <a href="mailto:TU_CORREO@gmail.com"><Image src="/svg/Google.svg" alt="Gmail" width={24} height={24} /></a>
            </div>
          </div>
          <div className="w-2/3  items-center justify-center bg-trasparent p-4 flex flex-col">
            <p className="text-center text-2xl">
              {nosotros[0].texto}
            </p>
            <div className="flex flex-row">
              {/* Agregar certificado Bootcamp y Certificado Ta */}
              <Image src="/svg/Github.svg" alt="GitHub" width={50} height={50} className="mr-24" />
              <Image src="/svg/Github.svg" alt="GitHub" width={50} height={50} className="ml-24" />
            </div>

          </div>
        </div>
      </div>
      <div className="flex m-4 h-screen " >
        <div className="flex flex-row-reverse  rounded-md  ">
          <div className="w-1/3 flex flex-col items-center justify-center bg-blue-200 p-4 ">
            <div className="w-32 h-80 mb-4">
              <Image src="/img/ejemploFoto.svg" alt="Mi foto" width={128} height={128} />
            </div>
            <h1 className="text-2xl font-bold">{nosotros[0].nombre}</h1>
            <h2 className="text-lg font-semibold">{nosotros[0].puesto}</h2>
            <div className="flex space-x-4">
              <a href="URL_DE_LINKEDIN"><Image src="/svg/Linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
              <a href="URL_DE_GITHUB"><Image src="/svg/Github.svg" alt="GitHub" width={24} height={24} /></a>
              <a href="mailto:TU_CORREO@gmail.com"><Image src="/svg/Google.svg" alt="Gmail" width={24} height={24} /></a>
            </div>
          </div>
          <div className="w-2/3 items-center justify-center bg-transparent p-4 flex flex-col">
            <p className="text-center mr-3 ml-3">
              {nosotros[0].texto}
            </p>
            <div className="flex flex-row">
              {/* Agregar certificado Bootcamp y Certificado Ta */}
              <Image src="/svg/Github.svg" alt="GitHub" width={50} height={50} className="mr-24" />
              <Image src="/svg/Github.svg" alt="GitHub" width={50} height={50} className="ml-24" />
            </div>

          </div>
        </div>
      </div>
    </section>


  )
}
// import Image from 'next/image';

// const InicioSection = () => {
//   return (
//     <div id="inicio" className="inicio bg-gradient-to-top from-opacity-80 to-opacity-100" style={{ backgroundImage: 'url(/images/background.jpg)', backgroundSize: 'cover' }}>
//       <div className="contenido-banner p-20 bg-gray-900 max-w-350 mx-auto text-center rounded-3xl">
//         <div className="contenedor-img">
//           <Image src="/images/Tadeo.jpg" alt="" className="mt-40 border-10 border-teal-500 block w-80 mx-auto rounded-full" />
//         </div>
//         <h1 className="mt-40 text-4xl font-righteous">Tadeo Massó</h1>
//         <h2 className="text-base font-normal">Desarrollador Web Full Stack</h2>
//         <div className="redes">
//           <a href="#" className="text-white inline-block text-center text-xl w-12 h-12 rounded-full border border-white line-height-12 my-10 mx-2 transition duration-300 hover:bg-yellowgreen"><i className="fab fa-instagram"></i></a>
//           <a href="#" className="text-white inline-block text-center text-xl w-12 h-12 rounded-full border border-white line-height-12 my-10 mx-2 transition duration-300 hover:bg-yellowgreen"><i className="fab fa-linkedin"></i></a>
//           <a href="#" className="text-white inline-block text-center text-xl w-12 h-12 rounded-full border border-white line-height-12 my-10 mx-2 transition duration-300 hover:bg-yellowgreen"><i className="fab fa-github"></i></a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InicioSection;


{/* Acerca de Eze
            <div className="conteiner style">
                <Image src={nosotrosEze.foto} width={400} height={400} alt="foto Ezequiel" />
                <h2> "te cuento un poco de mi:"{nosotrosEze.texto}</h2>
                <div>
                    Mis Redes : {nosotrosEze.redes}
                </div>
                <div>
                    Certificados:{nosotrosEze.certificado}
                </div>
                <div>
                    Contactame: {nosotrosEze.contacto}
                </div>
            </div> */}

            // const nosotrosEze = {
    //     //agregar luego un icono con la url del portfolio personal
    //     texto: "texto sobre nosotros",
    //     redes: "link de redes",
    //     contacto: "datos de contacto",
    //     foto: "",
    //     certificado: "url certificado"

    // }