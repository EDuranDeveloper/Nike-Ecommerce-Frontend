import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../hooks/useFavoriteStore";
import { Navbar } from "../components/Navbar";
import { Favorites } from "./components/Favorites";
import { useAuthStore } from "../../hooks/useAuthStore";
import { NavbarProfile } from "./components/NavbarProfile";
import Orders from "./components/Orders";
import { Account } from "./components/Account";
import { AddresDelivery } from "./components/AddresDelivery";

export function ProfilePage() {
  const [section, setSection] = useState("Favorites")
  const { favorites, startGetFavorites, startDeleteFavoriteInUser } = useFavoriteStore();
  const { user } = useAuthStore();

  useEffect(() => {
    startGetFavorites();
  }, []);

  return (
    <div className=" bg-gray-50 pt-24 min-h-screen">
      <Navbar bgColor="gray-50" />
      <NavbarProfile section={section} setSection={setSection}/>
      <div className="max-w-7xl mx-auto px-4 py-6 ">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <img
            className="md:size-16 size-48 bg-gray-200 rounded-full items-center justify-center"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">Miembro de Nike desde marzo de 2022</p>
          </div>
        </div>

        {/* Sections */}
        {section === "Favorites" && <Favorites favorites={favorites} setSection={setSection} />}
        {section === "Orders" && <Orders />}
        {section === "Account settings" && <Account />}
        {section === "Delivery addresses" && <AddresDelivery />}


          {/* Next */}
        </div>
      </div>
  );
}
