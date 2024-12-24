import { useNavigate } from "react-router-dom";

export const Favorites = ({ favorites, startDeleteFavoriteInUser }) => {
  const navigate = useNavigate();
  

  const handleCardClick = (productId) => {
    navigate(`/size/${productId}`);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    navigate(`/favorites/`);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Favorites</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">View all</button>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100"></button>
            <button className="p-2 rounded-full hover:bg-gray-100"></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites?.length === 0 ? (
          <div className="flex flex-col w-max items-center justify-center">
            <h1 className="text-2xl font-bold">Your favorite products list is empty</h1>
          </div>
        ) : (
          favorites?.slice(0, 3).map((favorite) => (
            <div
              key={favorite._id}
              className="bg-white p-4 rounded-lg shadow-md transition cursor-pointer relative"
            >
              <div
                onClick={() => handleCardClick(favorite.productId)}
                className="relative mb-2"
              >
                <img
                  src={favorite.principalImage}
                  alt={favorite.name}
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
              <h3 className="text-lg font-semibold mb-1">{favorite.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{favorite.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
