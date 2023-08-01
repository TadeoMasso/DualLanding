import Image from "next/image"
import tadeoImage from "../../../../public/img/tadeo.png"


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
      foto: "/img/tadeo.png",
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
    <section className="bg-gray-700">
      <div className="flex m-4 h-screen">
        <div className="w-1/3 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${tadeoImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="w-32 h-80 mb-4">
          </div>
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-center p-16">
          <h1 className="text-7xl text-yellow-700 font-bold">{nosotros[0].nombre}</h1>
          <h2 className="text-2xl font-semibold text-yellow-700">{nosotros[0].puesto}</h2>
          <div className="flex space-x-4 flex justify-center">
            <a href="URL_DE_LINKEDIN">
              <Image src="/svg/Linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="URL_DE_GITHUB">
              <Image src="/svg/Github.svg" alt="GitHub" width={24} height={24} />
            </a>
            <a href="mailto:TU_CORREO@gmail.com">
              <Image src="/svg/Google.svg" alt="Gmail" width={24} height={24} />
            </a>
          </div>
          </div>
        </div>
        <div className="w-2/3 items-center justify-center bg-transparent p-4 flex flex-col">
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
      {/* Zunfa */}
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
