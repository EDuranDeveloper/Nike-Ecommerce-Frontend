import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import { Navbar } from "../components/Navbar";
import { Favorites } from "./components/Favorites";
import { useAuthStore } from "../../hooks/useAuthStore";
import { NavbarProfile } from "./components/NavbarProfile";
import Orders from "./components/Orders";

export function ProfilePage() {
  const [section, setSection] = useState("Favorites")
  const { favorites, startGetFavorites, startDeleteFavoriteInUser } = useFavoriteStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startGetFavorites();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <Navbar bgColor="gray-50" />
      <NavbarProfile section={section} setSection={setSection}/>
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
        {section === "Favorites" && <Favorites favorites={favorites} setSection={setSection} />}
        {section === "Orders" && <Orders />}


          {/* Next */}
        </div>
      </div>
  );
}
