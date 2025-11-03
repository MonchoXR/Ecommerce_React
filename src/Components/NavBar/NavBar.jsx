  import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";
  import logo from "../../assets/logo/AndeanCeramics400x80.png";
  import CardWidget from "../CartWidget/CardWidget";

  export function MiNavbar() {
    return (
      <Navbar fluid className="bg-white dark:bg-gray-900 shadow-md px-6 lg:px-20 z-10 border-b border-gray-200 dark:border-gray-700">
        {/* 🔹 IZQUIERDA — Logo */}

        
       
        <NavbarBrand href="#">
          <img
            src={logo}
            className="h-6 sm:h-9"
            alt="Andean Ceramics Logo"
          />
          
        </NavbarBrand>

        {/* 🔹 CENTRO — Buscador */}
        <div className="flex-1 flex justify-center">
          <div className="relative text-gray-600 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[600px] transition-all">
            <input
              type="search"
              placeholder="Buscar..."
              className="bg-gray-100 dark:bg-gray-700 h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none text-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 015.293 13.707l4 4-1.414 1.414-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
              </svg>
            </button>
          </div>
        </div>

       <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>

          {/* 🔹 DERECHA — Carrito */}
        <div className="flex items-center shrink-0 ml-4">
          <CardWidget />
        </div>

      </Navbar>
    );
  }
