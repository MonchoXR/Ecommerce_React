import { Link } from "react-router-dom";
import { useState } from "react";
import { Heart } from "lucide-react";

const Item = ({ id, nombre, precio, imagen, onAddToCart, discount }) => {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  // Hay descuento si discount existe y es > 0
  const hasDiscount = discount && discount > 0;

  // Calcular precio original
  const precioOriginal = hasDiscount
    ? Math.round(precio / (1 - discount / 100))
    : precio;

  const handleAdd = () => {
    setAdded(true);
    onAddToCart();
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col items-center p-5">

      {/* ❤️ FAVORITO */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 dark:bg-gray-700/80 shadow"
      >
        <Heart
          size={22}
          className={`${liked ? "fill-red-500 text-red-500"
              : "text-gray-600 dark:text-gray-300"
            } transition-all`}
        />
      </button>

      {/* 🏷️ BADGE DE DESCUENTO */}
      {hasDiscount && (
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow">
          {discount}% OFF
        </div>
      )}

      {/* 🖼️ IMAGEN */}
      <Link to={`/detalles/${id}`} className="w-full">
        <div className="aspect-square w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={imagen}
            alt={nombre}
            className="
              object-contain w-[85%] h-[85%] rounded-lg 
              brightness-110 transition-transform duration-300 
              hover:scale-110
            "
          />
        </div>
      </Link>

      {/* 🔤 NOMBRE */}
      <Link to={`/detalles/${id}`}>
        <h3 className="mt-4 font-sans text-xl font-semibold text-gray-600 dark:text-white hover:text-red-600 transition">
          {nombre}
        </h3>
      </Link>

      {/* 💰 PRECIOS */}
      <div className="mt-1 text-center">
        {hasDiscount ? (
          <div className="flex items-center justify-center gap-2">
            <span className="text-red-400 line-through text-sm">
              ${precioOriginal.toFixed(2)}
            </span>
            <span className="text-green-500 text-lg font-semibold ">
              ${precio.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-gray-800 dark:text-white text-lg font-semibold ">
            ${precio.toFixed(2)}
          </span>
        )}
      </div>

      {/* 🛒 ADD CART — OUTLINE ROJO + ESTADO VERDE */}
      <button
        onClick={handleAdd}
        className={`
          mt-3 w-full py-2 rounded-md font-medium transition-all

          ${added
            ? "bg-green-600 text-white scale-105 shadow-lg border-none"        // ESTADO VERDE
            : "bg-transparent border border-red-600 text-red-500 hover:bg-red-500 hover:text-white" // NORMAL
          }
        `}
      >
        {added ? "Added!" : "Add Cart"}
      </button>

    </div>
  );
};

export default Item;
