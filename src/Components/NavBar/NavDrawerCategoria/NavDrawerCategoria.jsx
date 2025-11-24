import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { Link } from "react-router-dom";

export function NavDrawerCategoria({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Drawer open={open} onClose={handleClose}>
      <DrawerHeader title="MENU" titleIcon={() => <></>} />

      <DrawerItems>
        <Sidebar
          aria-label="Category and Support Navigation"
          className="[&>div]:bg-transparent [&>div]:p-0"
        >
          <div className="flex h-full flex-col justify-between py-2">

            {/** SECCIÓN CATEGORÍAS */}
            <div>
              <p className="px-4 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                Categories
              </p>

              <SidebarItems>
                <SidebarItemGroup>
                   <SidebarItem as={Link} to="/" onClick={() => setOpen(false)}>Home</SidebarItem>
                  <SidebarItem as={Link} to="/categorias/cultural" onClick={() => setOpen(false)} >Cultural Ceramics</SidebarItem>
                  <SidebarItem as={Link} to="categorias/religious" onClick={() => setOpen(false)}>Religious Ceramics</SidebarItem>
                  <SidebarItem as={Link} to="categorias/homeDecor"onClick={() => setOpen(false)} >Home Decor</SidebarItem>
                  <SidebarItem as={Link} to="categorias/lamps" onClick={() => setOpen(false)} >Lamps & Lighting</SidebarItem>
                  <SidebarItem as={Link} to="categorias/pottery" onClick={() => setOpen(false)} >Vessels & Pottery</SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </div>

            {/** 🔷 SECCIÓN SOPORTE */}
            <div className="mt-6">
              <p className="px-4 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                Support
              </p>

              <SidebarItems>
                <SidebarItemGroup>
                  <SidebarItem href="#">Help Center</SidebarItem>
                  <SidebarItem href="#">Shipping & Delivery</SidebarItem>
                  <SidebarItem href="#">Returns & Refunds</SidebarItem>
                  <SidebarItem href="#">Track Orders</SidebarItem>
                  <SidebarItem href="#">Contact Support</SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </div>

          </div>
        </Sidebar>
      </DrawerItems>
    </Drawer>
  );
}
