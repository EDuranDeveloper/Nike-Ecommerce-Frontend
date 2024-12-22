import { useNavigate } from "react-router-dom";

export const ProfileFavorite = ({ favorite }) => {
  const navigate = useNavigate();
  const { productId, principalImage, name, category } = favorite;

  const handleCardClick = () => {
    navigate(`/size/${productId}`);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    navigate(`/favorites/`);
};


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
    </div>
  );
};
