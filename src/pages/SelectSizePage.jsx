import { useEffect, useState } from "react";
import { Navbar } from "../auth/components/Navbar";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { SizeSlice } from "./components/SizeSlice";
import { useProductStore } from "../hooks/useProductStore";

export function SelectSizePage() {
  const sizes = [
    "CM 16.5", "CM 17", "CM 17.5", "CM 18", "CM 18.5",
    "CM 19", "CM 19.5", "CM 20", "CM 20.5", "CM 21",
    "CM 21.5", "CM 22"
  ];

  const colors = [
    "#30D5C8", "#E0FFFF", "#FFA500", "#9ACD32", 
    "#2F4F4F", "#DC143C", "#FF69B4", "#000000"
  ];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  const { products, error, loading, startGetProducts } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    startGetProducts();
  }, []);

  const currentProduct = products.find((product) => product._id.toString() === id);

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    return <p>400</p>;
  }

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (!currentProduct) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Producto no encontrado</p>
      </div>
    );
  }

  console.log(currentProduct);

  const { category, name, description, principalImage } = currentProduct;

  return (
    <div className="h-screen bg-white flex flex-col p-5 md:overflow-hidden">
      <Navbar />

      <div className="flex-grow w-full mx-auto bg-[#F6F6F6] rounded-lg shadow-lg flex flex-col px-4 lg:px-6">
        {/* Mid Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          {/* Text Section */}
          <div className="lg:w-1/3 flex flex-col text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-500">
              {category} Shoes
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
              {name}
            </h1>
            <p className="text-gray-600 font-light text-md md:text-lg mt-2">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center lg:w-1/3">
            <img
              src={principalImage}
              alt={name}
              className="w-full max-w-xs lg:max-w-xl h-auto object-cover rounded-lg"
            />
          </div>

          {/* Select Sizes & Colors Section */}
          <div className="lg:max-w-full flex-grow mt-6 lg:mt-0">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                SELECT SIZE (MX)
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-3 border rounded-lg text-xs md:text-base ${
                      selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-black"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                SELECT COLOR
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

         <SizeSlice currentProduct={currentProduct}/> 
      </div>
    </div>
  );
}
