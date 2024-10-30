import React, { useState } from "react";

export const Sidebar = () => {

  const [showGender, setShowGender] = useState(true);
  const [showPromo, setShowPromo] = useState(true);

  const toggleGender = () => setShowGender(!showGender);
  const togglePromo = () => setShowPromo(!showPromo);

  return (
    <div className="w-full md:w-64 mb-6 md:mb-0 md:mr-8">
      <div className="flex font-semibold text-[#2C33F1] mt-3">
        <span>FILTERS ({0})</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-0.5 ml-2" 
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* Filtro GENDER */}
      <div className="mb-6">
        <h3
          className="text-md font-semibold mb-2 flex items-center justify-between cursor-pointer mt-8"
          onClick={toggleGender}
        >
          GENDER
        </h3>
        {showGender && (
          <ul className="space-y-2">
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Female</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Male</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Kids</span>
              </label>
            </li>
          </ul>
        )}
        <hr className="border-gray-300 mb-4" />
      </div>

      {/* Filtro PROMO */}
      <div>
        <h3
          className="text-md font-semibold mb-2 flex items-center justify-between cursor-pointer"
          onClick={togglePromo}
        >
          PROMO {/* Puedes agregar un ícono aquí */}
        </h3>
        {showPromo && (
          <ul className="space-y-2">
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">HOT</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">OFF</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">New</span>
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

