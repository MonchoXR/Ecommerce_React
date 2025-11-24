import { useState, useEffect } from "react";
import { getMisProductos } from "../../data/asynmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); ``
  const [showCart, setShowCart] = useState(false);
  const params = useParams()

  useEffect(() => {
    getMisProductos()
      .then((respuesta) => {
        // Si NO hay categoría (ruta "/") → mostrar todo
        if (!params.cat) {
          setProductos(respuesta);
          return;
        }

        // 👉 Si hay categoría → filtrar
        const filtrados = respuesta.filter(
          (item) => item.categoria === params.cat
        );

        setProductos(filtrados);
      })
      .catch((error) => console.log(error));
  }, [params.cat]);

  const handleAddToCart = () => setShowCart(true);

  return (
    <div
      className={`relative bg-gray-50 dark:bg-gray-900 min-h-screen flex transition-all duration-500 ease-in-out ${showCart ? "" : "overflow-x-hidden"
        }`}
    >
      {/* 🟦 Catálogo */}
      <section
        className={`flex-1 px-8 pt-28 pb-12 transition-all duration-500 ${showCart ? "lg:mr-[340px]" : "mr-0"
          }`}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Mis productos reales
        </h2>
        <ItemList propProductos={productos} onAddToCart={handleAddToCart} />
      </section>

      {/* 🟥 Carrito alineado visualmente con el catálogo */}
      <aside
        className={`absolute right-0 top-45 bottom-12 bg-white dark:bg-gray-800 rounded-l-2xl shadow-2xl p-0 w-[340px] z-50 transition-transform duration-500 ${showCart ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">

          {/* 🔹 Header fijo */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 px-6 pt-6 pb-3 border-b border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
              🛒 Carrito
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center border border-dashed border-gray-300 dark:border-gray-700 rounded-xl py-2">
              Aquí se mostrarán los productos del carrito
            </p>
          </div>

          {/* 🔹 Contenido desplazable */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {/* Aquí se listarán los productos agregados */}
            <p className="text-gray-500 dark:text-gray-400 text-center">Tu carrito está vacío.</p>
          </div>

          {/* 🔹 Panel fijo */}
          <div className="sticky bottom-0 bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-300 dark:border-gray-700">
            <div className="flex justify-between mb-3 text-gray-900 dark:text-white">
              <span>Subtotal:</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between gap-3">
              <button className="flex-1 border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition">
                Ver Carrito
              </button>
              <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                Checkout
              </button>
            </div>
          </div>

        </div>
      </aside>

    </div>
  );
};

export default ItemListContainer;
