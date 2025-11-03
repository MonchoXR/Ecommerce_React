
import { Avatar, Dropdown, DropdownItem } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { ShoppingCart, ChevronDown } from "lucide-react";

const CardWidget = () => {
  return (
    <>
     
      <div className="flex items-center gap-3  shrink-0">
        <div className="relative">
          <ShoppingCart className="h-7 w-7 text-gray-700 dark:text-gray-200 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
        <Dropdown
          inline
          arrowIcon={false} //desactiva la flecha de Flowbite ya que no refleja el darkmode
          label={
            <div className="flex items-center gap-1">
              <Avatar 
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                rounded
                
              />
              <ChevronDown className="chevron-anim h-4 w-4 text-gray-700 dark:text-gray-200 transition-transform duration-300" />
            </div>
          }
        >
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Orders</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
          {/*/* Personalizamos darkmode con el Menu del avatar segun flowbite  */}
          <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => document.querySelector("button[data-testid='dark-theme-toggle']")?.click()}
          >
            <span>Dark Mode</span>
            <DarkThemeToggle className="[&>button]:p-0 [&>button]:m-0 [&>button]:bg-transparent [&>button]:ring-0 [&>button]:focus:ring-0 [&>button]:hover:bg-transparent [&>button]:shadow-none [&>button]:border-0" />
          </div>
        </Dropdown>
      </div>
    </>
  )
}

export default CardWidget