import Swal from "sweetalert2";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useProductStore } from "../../hooks/useProductStore";
import { SpinnerPage } from "../../auth/pages/SpinnerPage";
import { Sidebar } from "../cart/Sidebar";
import { ProductCard } from "./ProductCard";


export const ProductCollectionPage = () => {


  const { products, loading, error, startGetProducts } = useProductStore()

  useEffect(() => {
    startGetProducts()
  }, [])

  if (loading) {
    return <SpinnerPage />
  }
  

  if(error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    return <p>400</p>
  }


  
  

  return (
    <div className="bg-[#E8E8E8] rounded-md">
      <Navbar bgColor={"white"} />
      <div className="px-4 py-8 bg-white rounded-md">
        <h1 className="text-2xl font-bold mt-24 mb-6">COLLECTION</h1>
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{products.length} Products</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

