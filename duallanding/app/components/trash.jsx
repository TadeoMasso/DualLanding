// import React, { useState } from "react";
// import Image from "next/image";
// const proyectos = [
//   {
//     nombre: "proyecto 1",
//     foto: "/img/titulo.svg",
//     url: "url del deploy",
//   },
//   {
//     nombre: "proyecto 2",
//     foto: "/img/titulo.svg",
//     url: "url del deploy",
//   },
//   {
//     nombre: "proyecto 3",
//     foto: "/img/titulo.svg",
//     url: "url del deploy",
//   },
// ];

// const Portfolio = () => {
//   const [isOverlayOpen, setIsOverlayOpen] = useState(false);
//   const [overlayImageSrc, setOverlayImageSrc] = useState("");

//   const openOverlay = (src) => {
//     setIsOverlayOpen(true);
//     setOverlayImageSrc(src);
//   };

//   const closeOverlay = () => {
//     setIsOverlayOpen(false);
//   };

//   return (
//     <section id="portfolio" className="min-h-screen bg-white">
//       <div className="grid grid-cols-4 gap-2">
//         {proyectos.map((proyecto, index) => (
//           <div
//             key={index}
//             className="project relative bg-primary overflow-hidden"
//             onClick={() => openOverlay(proyecto.foto)}
//           >
//             <Image width={100} height={100} className="project__image absolute opacity-90" src={proyecto.foto} />
//             <p>{proyecto.nombre}</p>
//             <h3 className="grid__title absolute w-full text-center whitespace-nowrap bottom-0 font-light text-sm text-dark uppercase tracking-wide">
//               front-end
//             </h3>
//             <div className="grid__overlay absolute bg-secondary bg-opacity-90 h-full grid place-items-center opacity-0 transition-all duration-300">
//               <button className="viewbutton border-2 border-white font-light text-white text-sm uppercase py-2 px-4 hover:bg-white hover:text-secondary transform hover:scale-105 transition-all duration-300">
//                 view more
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={`overlay ${isOverlayOpen ? "open" : ""}`} onClick={closeOverlay}>
//         <div className="overlay__inner bg-white w-700 px-20 py-4 relative opacity-100">
//           <button className="close absolute top-3 right-10 bg-none outline-none text-dark border-0 text-uppercase tracking-wide hover:text-secondary" onClick={closeOverlay}>
//             close X
//           </button>
//           <Image width={100} height={100} src={overlayImageSrc} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio; 
// import 'tailwindcss/tailwind.css';
// import React from 'react';
// import Image from 'next/image';

// const Portfolio = () => {
//   const projects = [
//     {
//       imageUrl:"/img/titulo.svg",
//       category: 'websites',
//       title: 'front-end',
//     },
//     // Resto de los proyectos...
//   ];

//   const openOverlay = (imageUrl) => {
//     const overlay = document.querySelector('.overlay');
//     const overlayImage = document.querySelector('.overlay__inner img');
//     overlay.classList.add('open');
//     overlayImage.src = imageUrl;
//   };

//   const closeOverlay = () => {
//     const overlay = document.querySelector('.overlay');
//     overlay.classList.remove('open');
//   };

//   return (
//     <section id="portfolio">
//       {projects.map((project, index) => (
//         <div key={index} className="project" onClick={() => openOverlay(project.imageUrl)}>
//           <Image className="project__image" src={project.imageUrl} alt="" width={700} height={400} />
//           <p>{project.category}</p>
//           <h3 className="grid__title">{project.title}</h3>
//           <div className="grid__overlay">
//             <button className="viewbutton">view more</button>
//           </div>
//         </div>
//       ))}
//       <div className="overlay" onClick={closeOverlay}>
//         <div className="overlay__inner">
//           <button className="close">close X</button>
//           <Image alt="" width={700} height={400} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
