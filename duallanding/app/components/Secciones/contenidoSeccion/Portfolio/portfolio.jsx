import React from "react";
import Image from "next/image";

export default function Portfolio() {
  const containerStyle = {
    padding: "2rem 0",
    paddingLeft: "8rem", // lg:px-32
    paddingTop: "4rem", // lg:pt-12
  };

  const imageContainerStyle = {
    margin: "-0.25rem", // -m-1
    display: "flex",
    flexWrap: "wrap",
    margin: "-0.5rem", // md:-m-2
  };

  const imageWrapperStyle = {
    width: "50%", // w-1/2
    flexWrap: "wrap",
  };

  const imageStyle = {
    width: "100%", // w-full
    height: "100%", // h-full
    borderRadius: "0.25rem", // rounded-lg
    objectFit: "cover", // object-cover
    objectPosition: "center", // object-center
  };

  const miImagenStyle = {
    ...imageStyle, // Reutiliza los estilos de imageStyle
    border: "5px solid #000", // Por ejemplo, el borde definido en portfolio.css
    // ... Otros estilos personalizados de miImagen
  };

  const miImagenStyle2 = {
    ...imageStyle,
    // ... Estilos personalizados para miImagen2 (si los tienes)
  };

  const animationBoxStyle = {
    fontSize: "3vw",
    margin: "max(1rem, 3vw)",
    border: "0.35rem solid",
    padding: "3vw",
    animation: "borderRotate var(--d) linear infinite forwards",
  };

  const animationBoxStyle2 = {
    ...animationBoxStyle,
    animation: "borderRadial var(--d) linear infinite forwards",
  };

  return (
    <div style={containerStyle}>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Raleway:400");

        @keyframes borderRotate {
          100% {
            --angle: 420deg;
          }
        }
        
        @keyframes borderRadial {
          20% {
            --gradX: 100%;
            --gradY: 50%;
          }
          40% {
            --gradX: 100%;
            --gradY: 100%;
          }
          60% {
            --gradX: 50%;
            --gradY: 100%;
          }
          80% {
            --gradX: 0%;
            --gradY: 50%;
          }
          100% {
            --gradX: 50%;
            --gradY: 0%;
          }
        }
        
        /* Estilos adicionales de tu componente */
        /* Por ejemplo, si necesitas estilos específicos para el componente */
      `}</style>
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle}>
          <div style={{ padding: "0.5rem", ...animationBoxStyle }}>
            <img
              alt="gallery"
              style={{ ...imageStyle, ...miImagenStyle }}
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
        </div>
        <div style={imageWrapperStyle}>
          <div style={{ padding: "0.5rem", ...animationBoxStyle }}>
            <img
              alt="gallery"
              style={{ ...imageStyle, ...miImagenStyle }}
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
        </div>
        <div style={imageWrapperStyle}>
          <div style={{ padding: "0.5rem", ...animationBoxStyle }}>
            <img
              alt="gallery"
              style={{ ...imageStyle, ...miImagenStyle2 }}
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
        </div>{" "}
        <div style={imageWrapperStyle}>
          <div style={{ padding: "0.5rem", ...animationBoxStyle }}>
            <img
              alt="gallery"
              style={{ ...imageStyle, ...miImagenStyle2 }}
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
