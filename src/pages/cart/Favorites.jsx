import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";

export const Favorites = ({ startPostCartInUser }) => {
  const { favorites, startGetFavorites } = useFavoriteStore();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    startGetFavorites();
  }, []);

  const displayedFavorites = showAll ? favorites : favorites.slice(0, 3);

  const onAddToCart = (productId) => {
    startPostCartInUser(productId);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 underline">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          displayedFavorites.map((favorite) => (
            <div
              key={favorite.productId}
              className="bg-gray-100 p-4 rounded-lg flex flex-col justify-end"
            >
              <img
                src={favorite.principalImage}
                alt={favorite.name}
                className="w-full mb-4"
              />
              <h3 className="font-bold">{favorite.name}</h3>
              <p className="text-gray-600">{favorite.description}</p>

              <div className="flex items-center mt-2 ">
                {favorite.discount > 0 ? (
                  <>
                    <span className="text-lg font-bold mr-2">
                      $
                      {(
                        (favorite.price * (100 - favorite.discount)) /
                        100
                      ).toFixed(2)}
                    </span>
                    <span className="text-base font-bold mr-2 line-through text-gray-400">
                      ${favorite.price.toFixed(2)}
                    </span>
                    <span className="text-md text-green-600 font-semibold">
                      {favorite.discount}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold mr-2">
                    ${favorite.price.toFixed(2)}
                  </span>
                )}
              </div>

              <button
                onClick={() => onAddToCart(favorite.productId)}
                className="mt-2 bg-gray-300 text-gray-950 px-2 py-2 rounded-full w-full md:text-sm"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-bold w-max">
            Your favorite products list is empty
          </h1>
        )}
      </div>

      {/* Botón para mostrar más/menos favoritos */}
      <div className="mt-2 flex justify-between">
        <div>
          {favorites.length > 3 && (
            <span
              onClick={() => setShowAll(!showAll)}
              className="text-black underline font-bold cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
            </span>
          )}
        </div>

        <div>
          {favorites.length > 3 &&
            (showAll ? (<span className="underline text-black font-bold cursor-pointer">
                Go to favorites
              </span> ) : null)}
        </div>
      </div>
    </div>
  );
};
