import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { WomenPage } from "../pages/landing/WomenPage";
import { LandingPage } from "../pages/landing/LandingPage";
import { ProductCollectionPage } from "../pages/product/ProductCollectionPage";
import { SelectSizePage } from "../pages/size/SelectSizePage";
import { ShoppingCartPage } from "../pages/cart/ShoppingCartPage";
import { SpinnerPage } from "../auth/pages/SpinnerPage";





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
