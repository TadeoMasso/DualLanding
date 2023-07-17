import React from 'react';
import '@fontsource/playfair-display';

export default function Inicio() {
    return (<div>
        
            <section className="flex items-center justify-center h-screen flex-col bg-black">
                <div className="h-1/4 b text-white flex items-center bg-cover justify-center mb-50">
                    <div className="text-center">
                        <h1 className="mt-8 font-serif text-6xl border-b-4 border-r-4 border-yellow-500 inline-block px-3 pb-1 text-white">Dua!Landing</h1>
                        <p className="text-sm text-white">Un proyecto creado por <strong>Tadeo Massó</strong> y <strong>Ezequiel Zungri</strong></p>
                        <p className="text-sm mx-4 text-center text-white">¡Bienvenido a Dua!Landing!
                        Somos Ezequiel Zungri y Tadeo Massó, dos apasionados desaarrolladores web egresados de la academia virtual Soy Henry. Estamos emocionados de presentarte nuestros portfolios y mostrarte lo que podemos hacer.</p>
                    </div>
                </div>

                <div className="h-1/4 bg-white  text-white flex items-center bg-cover justify-center mb-50">
                   
                    <p className="text-sm mx-4 text-center text-white">¡Bienvenido a Dua!Landing!
                        Somos Ezequiel Zungri y Tadeo Massó, dos apasionados desaarrolladores web egresados de la academia virtual Soy Henry. Estamos emocionados de presentarte nuestros portfolios y mostrarte lo que podemos hacer.</p>
                </div>
            </section>
        
    </div>
    );
}




