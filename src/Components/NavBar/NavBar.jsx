import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";

import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo/AndeanCeramics400x80.png";
import CardWidget from "../CartWidget/CardWidget";
import { NavDrawerCategoria } from "./NavDrawerCategoria/NavDrawerCategoria";
import { NavLanguage } from "./NavLanguage/NavLanguage";



export function MiNavbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Navbar
        fluid
        className=" px-4 lg:px-10 py-4 bg-white dark:bg-gray-900 shadow-md z-10 border-b border-gray-200 dark:border-gray-700"
      >
        {/* 🔹 TOGGLE MÓVIL */}
        <div className="md:hidden" onClick={() => setOpenDrawer(true)}>
          <NavbarToggle />
        </div>
        {/* 🔹 LOGO */}
        <NavbarBrand href="#">
          <img
            src={logo}
            className="h-7 sm:h-8 lg:h-12"
            alt="Andean Ceramics Logo"
          />
        </NavbarBrand>

        {/* 🔹 BOTÓN CATEGORÍAS */}
        <Button
          onClick={() => setOpenDrawer(true)}
          className="hidden md:flex  p-0 items-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white border-none shadow-none  rounded-lg"
        >
          <Menu className="h-5 w-5" />
          <span className="font-medium text-left  text-sm  lg:text-base ">Categorías</span>
        </Button>

        {/* 🔹 BUSCADOR CENTRAL */}
        <div className="flex flex-1 justify-center  mx-5">
          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              placeholder="Buscar..."
              className="bg-gray-100 dark:bg-gray-700 h-10 w-full px-5 pr-10 rounded-full text-sm text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
            />
            <button className="absolute right-0 top-0 mt-2 mr-4 text-gray-500 dark:text-gray-300">
              🔍
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center mr-4">
          <NavLanguage />
        </div>

        {/* 🔹 CARRITO */}
        <div className="flex md:order-2">
          <CardWidget />
        </div>

      </Navbar>

      {/* 🔹 DRAWER DE CATEGORÍAS */}
      <NavDrawerCategoria open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}
