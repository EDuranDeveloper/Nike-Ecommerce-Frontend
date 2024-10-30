import Swal from "sweetalert2";
import { useCartStore } from "../../hooks/useCartStore";

export function SizeSlice({ currentProduct }) {

  const { startPostCartInUser } = useCartStore()

  const onAddToBag = () => {
    startPostCartInUser({ currentProduct })
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
    <div className="flex flex-col lg:flex-row bg-white mx-auto rounded-xl justify-between p-8 mt-6">
      {/* Image Carousel */}
      <div className="flex gap-2 lg:gap-4 overflow-x-auto">
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
          <button onClick={onAddToBag} className="bg-black text-white px-8 lg:px-12 py-4 lg:py-6 rounded-lg font-semibold ml-4">
            ADD TO BAG
          </button>
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
