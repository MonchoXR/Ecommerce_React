import { useState } from "react";

import { MiNavbar } from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

export default function App() {


  return (
    <>
      <MiNavbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:cat" element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />

      </Routes>
    </>

  );
}
