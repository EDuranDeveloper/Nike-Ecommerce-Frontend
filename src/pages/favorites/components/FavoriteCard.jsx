import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFavoriteStore } from "../../../hooks/useFavoriteStore";

export const FavoriteCard = ({ favorite }) => {
  const navigate = useNavigate();
  const [isRemoving, setIsRemoving] = useState(false);
  const [progress, setProgress] = useState(100);

  const { startDeleteFavoriteInUser } = useFavoriteStore()
  const { productId, principalImage, name, price, category, discount } = favorite;

  const handleCardClick = () => {
    navigate(`/size/${productId}`);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    setIsRemoving(true);
  };

  const handleUndoClick = () => {
    setIsRemoving(false);
    setProgress(100); 
  };

  useEffect(() => {
    let timer;
    if (isRemoving && progress > 0) {
      timer = setInterval(() => setProgress((prev) => prev - 2), 100);
    } else if (progress <= 0) {
      startDeleteFavoriteInUser( productId );
    }
    return () => clearInterval(timer);
  }, [isRemoving, progress, productId, startDeleteFavoriteInUser]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition cursor-pointer relative">
      <div onClick={handleCardClick} className="relative mb-2">
        <img
          src={principalImage}
          alt={name}
          className="w-full object-cover rounded"
        />
        <div onClick={handleIconClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 absolute top-2 right-2 text-black m-4 rounded-full bg-white p-2 border border-opacity-40 border-white opacity-75 transition-all duration-200 ease-in-out hover:stroke-black hover:fill-none"
            viewBox="0 0 20 20"
            fill="currentColor" 
            strokeWidth="2"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{category}</p>
      <div className="flex items-center">
        {discount > 0 ? (
          <>
            <span className="text-lg font-bold mr-2">
              ${((price * (100 - discount)) / 100).toFixed(2)}
            </span>
            <span className="text-base font-bold mr-2 line-through text-gray-400">
              ${price.toFixed(2)}
            </span>
            <span className="text-md text-green-600 font-semibold">
              {discount}% OFF
            </span>
          </>
        ) : (
          <span className="text-lg font-bold mr-2">${price.toFixed(2)}</span>
        )}
      </div>

      {isRemoving && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-end">
          <div className="w-full h-2 bg-gray-200 mt-2 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-black transition-width duration-150"
            />
          </div>
          <div className="bg-black w-full h-24 flex justify-center items-center gap-4">
            <span className="text-2xl text-white font-bold">Delete favorites</span>
          <button
            onClick={handleUndoClick}
            className="px-6 py-2 bg-white text-black text-xl font-semibold rounded transition duration-200"
          >
            Undo
          </button>
          </div>
        </div>
      )}
    </div>
  );
};
