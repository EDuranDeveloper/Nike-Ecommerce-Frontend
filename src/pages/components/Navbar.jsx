import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

export function Navbar({ navBarPad, bgColor = "transparent" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { user, startLogout } = useAuthStore();

  const onClickLogo = () => {
    navigate("/women");
  };

  const onClickAccount = () => {
    if (user.uid) {
      navigate("/profile/favorites");
    } else {
      navigate("/auth/login");
    }
  };

  const onLogout = () => {
    startLogout();
    navigate("/");
  };

  const onClickCollections = () => {
    navigate("/collection");
  };

  const onClickBag = () => {
    navigate("/bag");
  };

  const onClickFavorites = () => {
    navigate("/favorites");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickWomen = () => {
    navigate("/women");
    setIsMenuOpen(false);
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
          } md:flex items-center justify-center md:justify-between font-semibold text-[#333333] bg-white md:bg-transparent md:static md:flex-row flex-col absolute left-0 w-full md:w-auto md:space-x-8 top-full mt-2 md:mt-0 px-4 py-2 md:p-0 transition-all duration-300 ease-in-out rounded-lg`}
        >
          {/* Sección de la imagen (start) */}
          <li className="flex justify-center p-2">
            <img
              src="../nikelogo.png"
              alt="Logo"
              className="size-12 cursor-pointer"
              onClick={onClickLogo}
            />
          </li>

          {/* Sección del menú (center) */}
          <div
            className={`flex flex-col md:flex-row md:gap-8 text-lg justify-center items-center text-black font-semibold cursor-pointer ${
              user?.name ? "md:pl-60" : "md:pl-32"
            }`}
          >
            <li className="p-2 md:p-0" onClick={onClickWomen}>
              Women
            </li>
            <li className="p-2 md:p-0" onClick={closeMenu}>
              Men
            </li>
            <li className="p-2 md:p-0" onClick={closeMenu}>
              Kids
            </li>
            <li className="p-2 md:p-0" onClick={onClickCollections}>
              Collections
            </li>
          </div>

          {/* Sección de los íconos (end) */}
          <div className="flex space-x-4 p-2 rounded items-center justify-center">
            <li onClick={onClickFavorites}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                viewBox="0 0 20 20"
                fillRule="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={onClickBag}
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
                className="size-6 cursor-pointer"
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
              {user?.name ? (
                <p>{`Hello, ${user.name
                  .split(" ")[0]
                  .trim()
                  .slice(0, 5)}...!`}</p>
              ) : (
                <p></p>
              )}
            </li>
            <li onClick={onLogout}>
              {user?.name ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              ) : (
                <p></p>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
