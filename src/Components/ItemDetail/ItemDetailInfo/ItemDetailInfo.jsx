import { PlayCircle } from "lucide-react";

export default function ItemDetailInfo({ producto, setMostrarHistoria }) {
  const { id, nombre, descripcion, especificaciones, videoHistoria } = producto;

  return (
    <div className="flex flex-col justify-start gap-6">
      {/* 🏷️ Título */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
        {nombre}
      </h1>

      {/* 📖 Descripción */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {descripcion ||
        "Producto artesanal con diseño único, ideal para decoración o colección."}
      </p>

      {/* 📋 Especificaciones dinámicas */}
      {especificaciones && (
        <div className="rounded-xl p-5 ">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Especificaciones del producto
          </h3>

          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>🧱 <strong>Material:</strong> {especificaciones.material}</li>
            <li>🎨 <strong>Color:</strong> {especificaciones.color}</li>
            <li>📏 <strong>Medidas:</strong> {especificaciones.medidas}</li>
            <li>🌎 <strong>País de origen:</strong> {especificaciones.origen}</li>
            <li>🔢 <strong>Código:</strong> {especificaciones.codigo || `#${id}`}</li>
          </ul>
        </div>
      )}

      {/* 🎬 Historia (solo si hay videoHistoria) */}
      {videoHistoria && (
        <div className="bg-gray-50 dark:bg-gray-700/40 rounded-xl p-5 border border-gray-200 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Historia y Significado
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
            Esta pieza representa la abundancia y la unión familiar en la tradición peruana. 
            Cada trazo es hecho a mano por artesanos del Cusco, manteniendo viva una herencia que celebra 
            la conexión entre la tierra, el arte y la comunidad.
          </p>

          <button
            onClick={() => setMostrarHistoria(true)}
            className="text-[#DC5C57] hover:underline flex items-center gap-2 font-medium"
          >
            <PlayCircle size={18} /> Ver historia detrás de esta pieza
          </button>
        </div>
      )}
    </div>
  );
}
