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
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');

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
    <header className={`bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-50 ${navbarBackground}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div>
          <a href="/" className="flex items-center justify-center">
            <Image src="/svg/Logo.svg" alt="Logo" width={250} height={250} />
          </a>
        </div>
        <nav className="flex items-center ml-4 xl:ml-8">
          <ul className="flex items-center">
            {navigation.map((navigate) => (
              <li className="p-3 xl:p-6" key={navigate.label}>
                <a href={navigate.route} className="no-underline text-white">{navigate.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

