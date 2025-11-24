import { useState, useRef } from "react";
import { Search } from "lucide-react";

export default function ItemDetailZoom({
  src,
  alt,
  zoomFactor = 2.4,
  className = "",
}) {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!zoom) {
      setZoom(true); // Activa el zoom solo cuando el usuario mueve el mouse
    }

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    //  Ajuste de límites: permite ver más arriba y abajo
    const x = Math.min(98, Math.max(2, xPercent));
    const y = Math.min(98, Math.max(2, yPercent));

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => {
        setZoom(false);
        setPosition(null); // resetea la posición
      }}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/40
                  transition-all duration-300 ease-in-out cursor-zoom-in 
                  flex justify-center items-center ${className}`}
      style={{
        height: "520px",
        alignItems: "center",
      }}
    >
      {/* 🔍 Ícono de lupa (solo visible cuando no hay zoom) */}
      {!zoom && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10">
          <Search className="w-12 h-12 text-gray-400 opacity-60 dark:text-gray-300" />
        </div>
      )}

      {/* Imagen principal con zoom dinámico */}
      <img
        src={src}
        alt={alt}
        style={{
          ...(position && { transformOrigin: `${position.x}% ${position.y}%` }),
          transform: zoom ? `scale(${zoomFactor})` : "scale(1)",
        }}
        className="object-contain w-auto h-full transition-transform duration-150 ease-out select-none"
      />
    </div>
  );
}
