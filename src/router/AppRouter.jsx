import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from '../auth/pages';





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
          {
            ( status === "not-authenticated" )
            ? (
               <>
                <Route path="/auth/*" element={ <RegisterPage /> } />
                <Route path="/*" element={ <Navigate to="/auth/login" /> } />
               </>
              ) : 
                <>
                <Route path="/*" element={<LoginPage />}/>
                <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                </>
          } 
      </Routes>
    
    </>
  )
}