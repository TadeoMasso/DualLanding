"use client"
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import { useState, useEffect } from 'react';

const navigation = [
  {
    label: "Inicio",
    route: "/#inicio",
    current: true,
  },
  {
    label: "Acerca de",
    route: "/#acerca-de",
    current: false,
  },
  {
    label: "Portfolio",
    route: "/#portfolio",
    current: false,
  },
  {
    label: "Contacto",
    route: "/#contacto",
    current: false,
  },
];

export default function NavBar() {
  const [navbarBackground, setNavbarBackground] = useState('black');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;

      if (offset > 0) {
        setNavbarBackground('bg-black');
      } else {
        setNavbarBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className="bg-gray-300 bg-opacity-70 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="flex" >
        <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
          <Image src="/svg/Logo.svg" alt="Logo" width={250} height={250} className='flex justify-start' />
        </a>
        </div>
        <div className="flex-grow flex justify-center">
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center ml-4 xl:ml-8">
            {navigation.map((navigate) => (
              <li className="p-3 xl:p-6 active" key={navigate.label}>
                <a href={navigate.route} className="no-underline text-blue-950">{navigate.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    
    
    </header>
  </>
  
  );
}
