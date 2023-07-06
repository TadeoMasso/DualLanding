import Image from 'next/image'
import styles from './page.module.css'
import Secciones from "./components/Secciones/secciones"
import ContactForm from "./components/contactForm"
import Navbar from "./components/NavBar/navbar"

export default function Home() {
  return (
    <div>
       <Secciones/>
       <ContactForm/>
    </div>
  )
}
