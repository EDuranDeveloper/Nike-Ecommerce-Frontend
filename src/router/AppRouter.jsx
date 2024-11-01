import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { WomenPage } from "../pages/landing/WomenPage";
import { ProductCollectionPage } from "../pages/product/ProductCollectionPage";
import { SelectSizePage } from "../pages/size/SelectSizePage";
import { ShoppingCartPage } from "../pages/cart/ShoppingCartPage";
import { SpinnerPage } from "../auth/pages/SpinnerPage";
import { FavoritesPage } from "../pages/favorites/FavoritesPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { LandingPage } from "../pages/landing/LandingPage";





export function AppRouter() {


  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  // Muestra una página de carga mientras se verifica el estado de autenticación
  if (status === "checking") {
    return <SpinnerPage />;
  }


  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        {/* Bloquear rutas de login y registro si el usuario está autenticado */}
        {status === "authenticated" ? (
          <>
            <Route path="/auth/login" element={<Navigate to="/" />} />
            <Route path="/auth/register" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </>
        )}
                <Route path="/collection" element={<ProductCollectionPage />}/>                
                <Route path="/size/:id" element={<SelectSizePage />}/>
                <Route path="/bag" element={<ShoppingCartPage />}/>
                <Route path="/women" element={<WomenPage />}/>
                <Route path="/favorites" element={<FavoritesPage />}/>

      </Routes>

    </>
  );
}
