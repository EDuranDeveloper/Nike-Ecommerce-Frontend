import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, SpinnerPage } from '../auth/pages';
import { LandingPage } from '../pages/LandingPage';
import { SelectSizePage } from "../pages/SelectSizePage";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import ProductCollectionPage from "../pages/ProductCollectionPage";
import { useCartStore } from "../hooks/useCartStore";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { WomenPage } from "../pages/landing/WomenPage";





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

      </Routes>

    </>
  );
}
