import React from 'react';
import Image from 'next/image';

export default function Portfolio(){
  return (
    <section id="portfolio" className="min-h-screen bg-white">
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {/* Aquí va el contenido de los proyectos */}
        <h1>ola mundo </h1>
      </div>
      <div className="overlay hidden fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-10">
        <div className="overlay__inner flex items-center justify-center">
          <button className="close absolute top-3 right-3 bg-white text-gray-800 px-4 py-2 uppercase font-bold text-sm rounded-md hover:bg-gray-200">
            close X
          </button>
          <Image className="w-1/2" height={100} width={100} src="/img/titulo.svg" alt="" />
        </div>
      </div>
    </section>
  );
};




