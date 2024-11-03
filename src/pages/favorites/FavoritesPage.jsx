import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { FavoriteCard } from "./components/FavoriteCard";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import { SpinnerPage } from "../../auth/pages/SpinnerPage";

export function FavoritesPage() {
  const { favorites, loading, error, startGetFavorites, startDeleteFavoriteInUser } = useFavoriteStore();

  useEffect(() => {
    startGetFavorites();
  }, []);

  if (loading) {
    return <SpinnerPage />;
  }

  if (error) {
    return <div>Error loading favorites: {error}</div>;
  }

  return (
    <main>
      <div className="bg-[#E8E8E8] rounded-md">
        <Navbar bgColor={"white"} />
        <div className="px-14 py-8 bg-white rounded-md">
          <h1 className="text-2xl font-bold mt-11 mb-6">Favorites</h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.length === 0 ? (
                  <div className="flex flex-col md:w-screen items-center justify-center">
                  <h1 className="text-3xl font-bold text-center">Your favorite products list is empty go to</h1>
                  <button
                    className="px-4 py-3 mt-2 text-2xl font-bold rounded-md relative 
                               after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black 
                               after:transition-transform after:duration-300 after:scale-x-100 hover:after:scale-x-0 
                               hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Collections
                  </button>
                </div>
                
                ) : (
                  favorites.map((favorite) => (
                    <FavoriteCard key={favorite._id} favorite={favorite} startDeleteFavoriteInUser={startDeleteFavoriteInUser} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
