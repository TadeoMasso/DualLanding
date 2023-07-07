"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Secciones from "./components/Secciones/secciones"
import ContactForm from "./components/contactForm"
import NavBar from "./components/NavBar/navbar"
import {ThemeProvider} from "@material-tailwind/react"

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <NavBar/>
       <Secciones/>
       <ContactForm/>
       </ThemeProvider>
    </div>
  )
}




 