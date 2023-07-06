import './globals.css'
import { Inter } from 'next/font/google'
import React, {ReactNode} from 'react'
import Footer from "./components/footer"
import Navbar from "./components/navbar"



interface LayoutProps{
  children: ReactNode
}



export default function RootLayout({children}: LayoutProps){
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          </head>
          <body>
            <Navbar/>

            
            <div>
             {children}
            </div>

            <div>
              <Footer/>
            </div>

          </body>

        </html>
        )
}
