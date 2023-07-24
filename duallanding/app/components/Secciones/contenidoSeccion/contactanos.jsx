import React from 'react';
import { useForm } from '@formspree/react';

function Contacto() {
    const [state, handleSubmit] = useForm("xvojgkdv");

    if (state.succeeded) {
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        return <p>¡Gracias por tu mensaje!</p>;
    }

    return (
        
        <section className="bg-black mb-24">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md border-double border-8 border-white rounded-lg bg-gray-950">
                <div className="bg-gray-950">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contactanos</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">¿Tienes alguna duda? ¿O quieres contactarnos? ¡Comparte tus datos y envíanos un mensaje!</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Nombre</label>
                        <input
                            id="name"
                            type="name"
                            name="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Correo Electrónico</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Tu mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        ></textarea>
                        <button type="submit" disabled={state.submitting} className="border-double border-4 border-sky-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contacto;

