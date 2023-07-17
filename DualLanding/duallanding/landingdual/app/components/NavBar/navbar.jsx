"use client"
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import 'tailwindcss/tailwind.css';
import Image from "next/image";

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
  return (
    <>
      <header className="bg-black shadow-lg h-24 hidden md:flex relative">
        <a href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
          <Image src="/svg/Logo.svg" alt="Logo" width={100} height={100} />
        </a>
        <nav className="absolute inset-y-0 left-0 header-links contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
            {navigation.map((navigate) => (
              <li className="p-3 xl:p-6 active" key={navigate.label}>
                <a href={navigate.route} className="no-underline text-blue-950">{navigate.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hidden xl:contents">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <Image src="/svg/Google.svg" alt="Google" className="h-4" width={100} height={100} />
              </a>
            </li>
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <Image src="/svg/Github.svg" alt="Github" className="h-4" width={100} height={100} />
              </a>
            </li>
            <li className="p-1">
              <a href="" className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
                <Image src="/svg/LinkedIn.svg" alt="LinkedIn" className="h-4" width={100} height={100} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
