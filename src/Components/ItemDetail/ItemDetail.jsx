import { useState, useEffect } from "react";
import ItemDetailGallery from "./ItemDetailGallery/ItemDetailGallery";
import ItemDetailInfo from "./ItemDetailInfo/ItemDetailInfo";
import ItemDetailPurchase from "./ItemDetailPurchase/ItemDetailPurchase";
import ItemDetailModalHistoria from "./ItemDetailModalHistoria/ItemDetailModalHistoria";

export default function ItemDetail({ producto }) {
  const { id, nombre, precio, imagen, descripcion, galeria = [], videoHistoria, modelo3D, scale3D, style3D } = producto;

  const [mediaActual, setMediaActual] = useState(null);
  const [mostrarHistoria, setMostrarHistoria] = useState(false);
  const [indiceActual, setIndiceActual] = useState(0);

  // ✅ Inicializa la imagen principal
  useEffect(() => {
    if (imagen) setMediaActual(imagen);
  }, [imagen]);

  // ✅ Evita duplicados en la galería
  const listaGaleria = [imagen, ...(galeria || [])]
    .filter(Boolean)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-20 px-6">
      {/* 🧱 CONTENEDOR PRINCIPAL */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1.0fr_1fr_0.6fr] gap-6 
                   bg-white dark:bg-gray-800 rounded-3xl shadow-2xl 
                   overflow-hidden w-full p-6 transition-all duration-300 
                   mx-auto box-border"
      >        {/* 🖼️ COLUMNA 1 — Galería */}
        <ItemDetailGallery

          nombre={nombre}
          mediaActual={mediaActual}
          listaGaleria={listaGaleria}
          setMediaActual={setMediaActual}
          setIndiceActual={setIndiceActual}
          indiceActual={indiceActual}
          modelo3D={modelo3D}
          scale3D={scale3D}
          style3D={style3D}
        />

        {/* 📋 COLUMNA 2 — Info dinámica */}
        <ItemDetailInfo
          producto={producto}
          setMostrarHistoria={setMostrarHistoria}
        />

        {/* 💳 COLUMNA 3 — Compra */}
        <ItemDetailPurchase precio={precio} />
      </div>

      {/* 🎬 Modal de historia (si existe videoHistoria) */}
      {mostrarHistoria && (
        <ItemDetailModalHistoria
          videoHistoria={videoHistoria}
          setMostrarHistoria={setMostrarHistoria}
        />
      )}
    </div>
  );
}
