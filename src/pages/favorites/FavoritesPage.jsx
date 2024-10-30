import { useEffect } from "react";
import { useProductStore } from "../../hooks/useProductStore";
import { Navbar } from "../components/Navbar";
import { FavoriteCard } from "./components/FavoriteCard";

export function FavoritesPage() {

  const { products, loading, error, startGetProducts } = useProductStore()

  useEffect(() => {
    startGetProducts()
  }, [])
  

  return (
    <main>
        <div className="bg-[#E8E8E8] rounded-md">
      <Navbar bgColor={"white"} />
      <div className="px-14 py-8 bg-white rounded-md">
        <h1 className="text-2xl font-bold mt-24 mb-6">Favorites</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <FavoriteCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}