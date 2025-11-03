import Kero3D from "../assets/catalogo3D/Kero.glb";

export const productos = [
  {
    id: 1,
    nombre: "Kero Andina",
    descripcion: "Cerámica artesanal del Cusco",
    imagen: "/catalogo2D/KeroSVG.svg",
    modelo3D: Kero3D,

    // Propiedades específicas del modelo 3D
    scale3D: "1 1 1",
    style3D: {
      width3D: "320px",
      height: "320px",
      filter: "brightness(0.8) contrast(1)"
    }
  },

];