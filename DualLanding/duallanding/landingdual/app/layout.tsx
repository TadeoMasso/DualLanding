import './globals.css'
import { Inter } from 'next/font/google'
import React, {ReactNode} from 'react'
import Footer from "./components/footer"
import Navbar from "./components/NavBar/navbar"



interface LayoutProps{
  children: ReactNode
}



export default function RootLayout({children}: LayoutProps){
  return (
    <html>
      <head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

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
