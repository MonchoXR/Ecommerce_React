import Kero3D from "../assets/catalogo3D/Kero.glb";

export const misProductos = [
  {
    id: 1,
    nombre: "Kero Andina",
    descripcion: "Cerámica artesanal del Cusco",
    precio: 200.00,
    categoria: "pottery", // ✔ Vessels & Pottery
    imagen: "/catalogo2D/KeroSVG.svg",
    galeria: [
      "/catalogo2D/KeroSVG.svg",
      "/catalogo2D/ToritoDePucara.png",
      "/catalogo2D/VirgenDeGuadalupe.webp",
    ],
    videoHistoria: "https://www.youtube.com/watch?v=lgeHgjwyn-I",
    especificaciones: {
      material: "Arcilla pintada a mano",
      color: "Tonos tierra con detalles dorados",
      medidas: "25 cm × 10 cm × 10 cm",
      origen: "Cusco, Perú",
      codigo: "#1",
    },
    modelo3D: Kero3D,
    scale3D: "1 1 1",
    style3D: {


    },
  },

  {
    id: 2,
    nombre: "Gallina PortaHuevos",
    descripcion: "Cerámica Porta Huevos",
    precio: 300.00,
    categoria: "homeDecor", // ✔ Home Decor
    discount: 20,
    imagen: "/catalogo2D/Gallina600x600.webp",
    galeria: [
      "/catalogo2D/Gallina600x600.webp",
      "/catalogo2D/ToritoDePucara.png",
      "/catalogo2D/VirgenDeGuadalupe.webp",
    ],
    videoHistoria: "https://www.youtube.com/watch?v=lgeHgjwyn-I",
    especificaciones: {
      material: "Arcilla",
      color: "Rojo y blanco",
      medidas: "20 cm × 15 cm × 20 cm",
      origen: "Cusco, Perú",
      codigo: "#2",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 3,
    nombre: "Iglesia Ayacuchana",
    descripcion: "Cerámica Iglesia Ayacuchana",
    precio: 400.00,
    categoria: "religious",
    imagen: "/catalogo2D/IglesiaAyacuchana.png",
    especificaciones: {
      material: "Arcilla blanca esmaltada",
      color: "Beige con detalles multicolor",
      medidas: "18 cm × 12 cm × 10 cm",
      origen: "Ayacucho, Perú",
      codigo: "#3",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 4,
    nombre: "Torito De Pucara",
    descripcion: "Cerámica Toro de Pucará",
    precio: 400,
    categoria: "cultural",
    imagen: "/catalogo2D/ToritoDePucara.png",
    especificaciones: {
      material: "Arcilla con pintura natural",
      color: "Rojo tradicional con decoraciones doradas",
      medidas: "22 cm × 12 cm × 9 cm",
      origen: "Puno, Perú",
      codigo: "#4",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 5,
    nombre: "Montaña de Huscarán",
    descripcion: "Cerámica Montaña de Huscarán",
    precio: 400,
    categoria: "cultural",
    imagen: "/catalogo2D/MontanadeHuascaran.png",
    especificaciones: {
      material: "Arcilla artesanal",
      color: "Azul y blanco",
      medidas: "24 cm × 10 cm × 10 cm",
      origen: "Ancash, Perú",
      codigo: "#5",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 6,
    nombre: "Arca de Noé",
    descripcion: "Cerámica Arca de Noé",
    precio: 400,
    categoria: "religious", // ✔ Religious Ceramics
    imagen: "/catalogo2D/ArcaNoe.png",
    especificaciones: {
      material: "Arcilla con esmalte brillante",
      color: "Marrón con figuras coloridas",
      medidas: "25 cm × 12 cm × 12 cm",
      origen: "Ayacucho, Perú",
      codigo: "#6",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 7,
    nombre: "Lámpara de Angelito",
    descripcion: "Cerámica Lámpara de Angelito",
    precio: 400,
    categoria: "lamps", // ✔ Lamps & Lighting
    imagen: "/catalogo2D/AngelitoLamparas.png",
    especificaciones: {
      material: "Arcilla cocida con pintura acrílica",
      color: "Blanco y dorado",
      medidas: "18 cm × 10 cm × 8 cm",
      origen: "Cusco, Perú",
      codigo: "#7",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

  {
    id: 8,
    nombre: "La Virgen de Guadalupe",
    descripcion: "Cerámica La Virgen de Guadalupe",
    precio: 400,
    categoria: "religious", // ✔ Religious Ceramics
    imagen: "/catalogo2D/VirgenDeGuadalupe.png",
    especificaciones: {
      material: "Arcilla modelada y pintada a mano",
      color: "Rojo, azul y dorado",
      medidas: "26 cm × 14 cm × 9 cm",
      origen: "Ayacucho, Perú",
      codigo: "#8",
    },
    modelo3D: null,
    scale3D: "1 1 1",
    style3D: {
      width: "320px",
      height: "320px",
      filter: "brightness(1) contrast(1)",
    },
  },

];

// 🧩 Funciones asíncronas
export const getMisProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const unProducto = misProductos.find((item) => item.id == id);
      resolve(unProducto);
    }, 2000);
  });
};
