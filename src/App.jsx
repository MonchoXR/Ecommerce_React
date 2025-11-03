import { ThemeProvider, createTheme } from "flowbite-react";
import { MiNavbar } from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";



export default function App() {
  return (
    <>
     
      <MiNavbar/>
   
      <ItemListContainer saludo="mi carrito de compras" />
    </>
    
  );
}
