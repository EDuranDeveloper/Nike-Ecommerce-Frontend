import Swal from "sweetalert2";
import { useCartStore } from "../../hooks/useCartStore";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";

export function SizeSlice({ currentProduct }) {

  const { startPostCartInUser } = useCartStore()
  const { startPostFavoriteInUser } = useFavoriteStore()

  const onAddToBag = () => {
    startPostCartInUser( currentProduct._id )
  }

  const onAddToFavorites = () => {
    startPostFavoriteInUser( currentProduct._id )
  }

  const handleModalImage = (image) => {
    Swal.fire({
      imageUrl: image,
      // imageWidth: 1600,  // Ajusta este valor según sea necesario
      // imageHeight: 700, // Puedes aumentar este valor también
      imageAlt: "Imagen de producto", // Agrega un texto alternativo
      showConfirmButton: false,
    });
  };


  


  return (
    <div className="flex flex-col lg:flex-row bg-white mx-auto rounded-xl justify-between p-8 mt-6 ">
      {/* Image Carousel */}
      <div className="flex gap-2 lg:gap-4 overflow-scroll md:overflow-hidden">
        {currentProduct.secondaryImages.map((image, i) => (
          <img
            onClick={() => handleModalImage(image)}
            key={i}
            src={image}
            alt={currentProduct.name}
            className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg cursor-pointer"
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 mt-6 lg:mt-0">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
          <button onClick={onAddToBag} className="flex bg-black text-white px-4 lg:px-6 py-2 lg:py-4 rounded-lg font-semibold ml-4">
            Add to bag
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 ml-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          
          
          <button onClick={onAddToFavorites} className="flex bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold ml-4 border border-black">
            Favorites
            <span className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          </div>
          <div className="flex flex-col ml-2">
            {currentProduct.discount > 0 ? (
              <>
                <span className="text-lg font-bold mr-2">
                  ${((currentProduct.price * (100 - currentProduct.discount)) /100).toFixed(2)}
                </span>
                <span className="text-md text-green-600 font-semibold">
                  {currentProduct.discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-lg font-bold mr-2">
                ${currentProduct.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
