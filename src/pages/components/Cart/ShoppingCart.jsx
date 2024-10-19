import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ShoppingCart = ({ product }) => {

  const { color, name, price, principalImage, quantity, discount, productId } = product

  
  return (
    <div className="mb-8">
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex md:flex-row flex-col items-center mb-4">
          <Link to={`/size/${productId}`}>
          <img src={principalImage} alt={name} className="md:w-48 md:h-auto mr-4 p-4 object-cover" />
          </Link>
          <div>
            <h3 className="font-bold text-2xl">{name}</h3>
            <p className="text-gray-600 text-lg">Category</p>
            <p className="text-gray-600 text-lg">{color}</p>
            <p className="text-gray-600 text-lg">Talla 28 - Size</p>
          </div>
          <div className="ml-auto">
            <p className="font-bold">${((price * quantity) - ((price * quantity) * (discount / 100))).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="mr-2">{quantity}</span>
          <button className="mr-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Envío gratuito</p>
          <p className="text-sm text-gray-600">Llega el jue 24 de oct <span className="underline">Editar ubicación</span></p>
        </div>
        <div className="mt-4 flex items-center text-yellow-600">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg> */}
          {/* <p className="text-sm">Solo quedan algunos productos. Haz tu pedido pronto.</p> */}
        </div>
      </div>
    </div>
  );
};
