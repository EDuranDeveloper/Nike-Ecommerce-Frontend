import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

export function Navbar({ navBarPad, bgColor = "transparent" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickAccount = () => {
    navigate("/auth/login");
  };

  const { user } = useAuthStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-${bgColor} fixed top-0 left-0 right-0 z-50 mx-4 py-${navBarPad}`}
    >
      <nav className="relative">
        {/* Botón de menú hamburguesa para móviles */}
        <div className="md:hidden flex items-center justify-between p-3">
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
          } md:flex items-center justify-between font-semibold text-[#333333] bg-white md:bg-transparent md:static md:flex-row flex-col absolute left-0 w-full md:w-auto md:space-x-8 top-full mt-2 md:mt-0 px-4 py-2 md:p-0 transition-all duration-300 ease-in-out`}
        >
          {/* Sección de la imagen (start) */}
          <li className="p-2">
            <img
              src="../nikelogo.png"
              alt="Logo"
              className="size-12 cursor-pointer"
              onClick={onClickLogo}
            />
          </li>

          {/* Sección del menú (center) */}
          <div
            className={`flex flex-col md:flex-row md:gap-8 text-lg justify-center text-black font-semibold cursor-pointer pl-${
              user.name && "40"
            }`}
          >
            <li className="p-2 md:p-0" onClick={closeMenu} >
              Women
            </li>
            <li className="p-2 md:p-0" onClick={closeMenu}>
              Men
            </li>
            <li className="p-2 md:p-0" onClick={closeMenu}>
              Kids
            </li>
            <li className="p-2 md:p-0" onClick={closeMenu}>
              Collections
            </li>
          </div>

          {/* Sección de los íconos (end) */}
          <div className="flex space-x-4 p-2 bg-white rounded">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                onClick={onClickAccount}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
              <li>
                {user.name ? (
                  <p>{`Hello, ${user.name.split(" ")[0].trim().slice(0, 5)}...!`}</p> 
                ) : <p></p> }
              </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
