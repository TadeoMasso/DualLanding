"use client"
import React from 'react';

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          display: flex;
          background: #333;
          justify-content: flex-end;
          align-items: flex-end;
          min-height: 100vh;
        }

        .footer {
          position: relative;
          width: 100%;
          background: #3586ff;
          min-height: 100px;
          padding: 20px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .social-icon,
        .menu {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          flex-wrap: wrap;
        }

        .social-icon__item,
        .menu__item {
          list-style: none;
        }

        .social-icon__link {
          font-size: 2rem;
          color: #fff;
          margin: 0 10px;
          display: inline-block;
          transition: 0.5s;
        }

        .social-icon__link:hover {
          transform: translateY(-10px);
        }

        .menu__link {
          font-size: 1.2rem;
          color: #fff;
          margin: 0 10px;
          display: inline-block;
          transition: 0.5s;
          text-decoration: none;
          opacity: 0.75;
          font-weight: 300;
        }

        .menu__link:hover {
          opacity: 1;
        }

        .footer p {
          color: #fff;
          margin: 15px 0 10px 0;
          font-size: 1rem;
          font-weight: 300;
        }

        .wave {
          position: absolute;
          top: -100px;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("https://i.ibb.co/wQZVxxk/wave.png");
          background-size: 1000px 100px;
          background-color: black;
        }

        .wave#wave1 {
          z-index: 1000;
          opacity: 1;
          bottom: 0;
          animation: animateWaves 4s linear infinite;
        }

        .wave#wave2 {
          z-index: 999;
          opacity: 0.5;
          bottom: 10px;
          animation: animate 4s linear infinite !important;
        }

        .wave#wave3 {
          z-index: 1000;
          opacity: 0.2;
          bottom: 15px;
          animation: animateWaves 3s linear infinite;
        }

        @keyframes animateWaves {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#inicio">Inico</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#acerca-de">Acerca De</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#portfolio">Portfolio</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contacto">Contacto</a>
          </li>
        </ul>
        <p>&copy;2023 Dua!Landing | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;



    
