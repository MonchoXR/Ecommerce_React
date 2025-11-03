import { Button } from "flowbite-react";
import { useState } from "react";
import { productos } from "../../data/productos";


const ItemListContainer = ({ saludo }) => {


    const [activa3D, setActiveId3D] = useState(null);
    const toggleModel3D = (id) => {
        setActiveId3D((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="flex flex-col justify-start items-center bg-white dark:bg-gray-900 min-h-[calc(100vh-4rem)] pt-[4rem]">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {saludo}
            </h2>

            {/* Mi Cermica */}

            {productos.map((producto) => ( 
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-lg transition mb-6"
                    key={producto.id}>
                    <div className="w-[320px] h-[320px] flex justify-center items-center">
                        {activa3D === producto.id && producto.modelo3D ? (
                            <model-viewer

                                bounds="tight"
                                ar
                                ar-scale="fixed"
                                ar-modes="scene-viewer webxr quick-look"
                                camera-controls
                                environment-image="neutral"

                                shadow-intensity="1"
                                exposure="0.42"
                                auto-rotate

                                scale={producto.scale3D}
                                src={producto.modelo3D}
                                alt={producto.nombre}
                                style={{
                                    ...producto.style3D,
                                    backgroundColor: "transparent",
                                }}
                            ></model-viewer>
                        ) : (
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="w-80 h-80 object-cover rounded-lg"
                            />
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                        {producto.nombre}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-center">
                        {producto.descripcion}
                    </p>

                    <Button onClick={() => toggleModel3D(producto.id)}>
                        {activa3D === producto.id ? "Ver en 2D" : "Ver en 3D"}
                    </Button>
                </div>

            ))}
        </div>
    )
}

export default ItemListContainer