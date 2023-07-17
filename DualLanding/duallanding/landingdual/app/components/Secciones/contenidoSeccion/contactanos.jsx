import { useState } from 'react';
import { validateForm } from '../validate';

export default function Contacto() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = { email, subject, message };
        const formErrors = validateForm(formData);

        if (Object.keys(formErrors).length === 0) {
            // Realiza alguna acción con los datos del formulario
            console.log('Formulario válido. Enviar datos:', formData);

            // Limpia los campos del formulario
            setEmail('');
            setSubject('');
            setMessage('');
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <section className="bg-red-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white">
                <div className="bg-orange-800">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactanos</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tienes alguna duda? O quieres contactarnos. Comparte tus datos y envianos un mensaje!</p>
                    <form onSubmit={handleSubmit} className="p-5 space-y-8 max-w-sm mx-auto bg-blue-700">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                className={`shadow-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                                placeholder="Tu correo electrónico"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                                placeholder="Dejanos saber qué necesitas"
                                value={subject}
                                onChange={handleSubjectChange}

                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje</label>
                            <textarea
                                id="message"
                                rows="6"
                                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                placeholder="Deja un comentario..."
                                value={message}
                                onChange={handleMessageChange}

                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="border-double border-4 border-sky-500 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

