import { useState } from "react";
import ItemDetailZoom from "./ItemDetailZoom/ItemDetailZoom";
import ModelViewer3D from "./ModelViewer3D/ModelViewer3D";
import { Box } from "lucide-react";

export default function ItemDetailGallery({
  nombre,
  mediaActual,
  listaGaleria,
  setMediaActual,
  setIndiceActual,
  modelo3D,
  scale3D,
  style3D,
}) {
  const [modo3D, setModo3D] = useState(false);

  return (
    <div className="flex flex-row gap-6 items-start justify-center">
      {/* 📸 Miniaturas verticales a la izquierda */}
      <div className="flex flex-col gap-4 pt-2">
        {listaGaleria.map((media, index) => (
          <button
            key={index}
            onClick={() => {
              setIndiceActual(index);
              setMediaActual(media);
              setModo3D(false); // Vuelve a modo 2D al hacer click en miniatura
            }}
            className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all duration-200 shadow-sm ${mediaActual === media
                ? "border-[#DC5C57] ring-2 ring-[#DC5C57]/50 scale-105"
                : "border-gray-200 dark:border-gray-600 hover:border-[#DC5C57]/70 hover:shadow-md"
              }`}
          >
            <img
              src={media}
              alt={`Vista ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </button>
        ))}
      </div>

      {/* 🖼 Imagen principal con efecto de zoom */}
      <div className="flex-1 flex justify-center items-center relative">
        {/* Badge "Disponible en 3D" - solo si tiene modelo3D */}
        {modelo3D && (
          <div
            onClick={() => setModo3D(!modo3D)}
            className="absolute left-1 bottom-1 z-20 flex items-center gap-2 px-4 py-2 
                          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md 
                          border border-purple-200 dark:border-purple-700/50 
                          rounded-full shadow-lg hover:shadow-xl 
                          transition-all duration-300 cursor-pointer
                          hover:scale-105 group">
            <Box
              size={18}
              className="text-purple-600 dark:text-purple-400 
                         group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              {modo3D ? "See Photos" : "See in 3D"}
            </span>
          </div>
        )}

        {/* Contenido: 2D (zoom) o 3D (model-viewer) */}
        {modo3D ? (
          <ModelViewer3D
            modelo3D={modelo3D}
            nombre={nombre}
            scale3D={scale3D}
            style3D={style3D}
          />
        ) : (
          <ItemDetailZoom
            src={mediaActual}
            alt={nombre}
            zoomFactor={2.5}
            className="max-w-[700px]"
          />
        )}
      </div>
    </div>
  );
}
