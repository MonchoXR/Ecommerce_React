
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getUnProducto } from "../../data/asynmock"
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const params = useParams()

  useEffect(() => {
    getUnProducto(params.id)
      .then((respuesta) => setProducto(respuesta))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer