import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from '../auth/pages';
import { LandingPage } from '../pages/LandingPage';
import { SelectSizePage } from "../pages/SelectSizePage";





export function AppRouter() {

  const status = "not-authenticated"

  if ( status === "checking") {
    return (
      <h3>Loading...</h3> //Carga personalizada
    )
  } 


  return (
    <>
      <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/auth/login" element={<LoginPage />}/>
                <Route path="/auth/register" element={<RegisterPage />}/>
                <Route path="/size" element={<SelectSizePage />}/>
              
      </Routes>
    
    </>
  )
}