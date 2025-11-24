import { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

export function NavLanguage() {
  const LANGUAGES = [
    { code: "EN", label: "English - EN", flag: "/icons/us.svg" },
    { code: "ES", label: "Español - ES", flag: "/icons/es.svg" },
  ];

  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);

  return (
    <Dropdown
      inline
      dismissOnClick={false}
      label={
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={currentLang.flag}
            className="w-6 h-5 rounded-sm object-cover"
          />
          <span className="text-sm font-medium">{currentLang.code}</span>
        </div>
      }
    >
      {LANGUAGES.map((lang) => (
        <DropdownItem
          key={lang.code}
          onClick={() => setCurrentLang(lang)}
          className="p-2!"
        >
          <div className="flex items-center gap-3">
            {/* RADIO SELECCIONADO 🔥 */}
            <span
              className={`
                w-3 h-3 rounded-full border
                ${currentLang.code === lang.code
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-400 bg-white dark:bg-gray-700"}
              `}
            />

            {/* BANDERA */}
            <img
              src={lang.flag}
              className="w-6 h-5 rounded-sm object-cover"
            />

            {/* TEXTO */}
            <span>{lang.label}</span>
          </div>
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
