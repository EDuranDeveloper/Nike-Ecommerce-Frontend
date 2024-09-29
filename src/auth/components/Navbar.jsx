import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent fixed md:top-0 md:left-0 md:right-0 md:z-50">
      <nav className="relative">
        {/* Botón de menú hamburguesa para móviles */}
        <div className="md:hidden flex items-center justify-between p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú para dispositivos móviles */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-x-16 justify-center font-semibold p-4 text-[#333333] bg-white md:bg-transparent`}
        >
          <li className="p-2 text-b" onClick={closeMenu}>Women</li>
          <li className="p-2" onClick={closeMenu}>Men</li>
          <li className="p-2" onClick={closeMenu}>Kids</li>
          <li className="p-2" onClick={closeMenu}>Collections</li>
        </ul>
      </nav>
    </header>
  );
}
