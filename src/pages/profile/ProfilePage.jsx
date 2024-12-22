import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import { Navbar } from "../components/Navbar";
import { ProfileFavorite } from "./components/ProfileFavorites";
import { useAuthStore } from "../../hooks/useAuthStore";

export function ProfilePage() {
  const { favorites, startGetFavorites, startDeleteFavoriteInUser } = useFavoriteStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startGetFavorites();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Navbar bgColor="gray-50" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-12">
          <img
            className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">Miembro de Nike desde marzo de 2022</p>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Favorites</h2>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">View all</button>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  {/* <ChevronLeft className="w-6 h-6" /> */}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  {/* <ChevronRight className="w-6 h-6" /> */}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.length === 0 ? (
              <div className="flex flex-col w-max items-center justify-center">
                <h1 className="text-2xl font-bold">Your favorite products list is empty</h1>
              </div>
            ) : (
              favorites.slice(0, 3).map((favorite) => (
                <ProfileFavorite
                  key={favorite._id}
                  favorite={favorite}
                  startDeleteFavoriteInUser={startDeleteFavoriteInUser}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
