import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useForm } from 'react-hook-form';
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";
import { useEffect } from "react";

export function RegisterPage() {


  const { register, handleSubmit, formState: {errors}, watch, formState } = useForm()

  const navigate = useNavigate()

  const { startRegister, errorMessage } = useAuthStore()

  const onAlreadyHaveAccount = () => {
    navigate("/auth/login")
  }

  const onSubmit = handleSubmit((data) => {

    const { confirmPassword, password, email, name } = data

    startRegister({ confirmPassword, password, email, name })
  })


  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Not register", errorMessage, "error")
    }

  }, [errorMessage])


  return (
    <>
      <Navbar />

      <main className="flex flex-col md:flex-row h-screen">
        <div className="flex w-full justify-center items-center">
          {/* Sección izquierda con la imagen */}
          <section className="hidden md:flex md:w-1/2 h-full">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="../NikeRegister.jpeg"
                alt="Nike Image Register Page"
                className="w-full h-full"
              />
            </div>
          </section>

          {/* Sección derecha para el formulario */}
          <section className="md:w-1/2 bg-white flex flex-col justify-center items-center md:p-4 mt-20">
            <h1 className="lg:text-7xl mg:text-5xl text-4xl font-bold mb-4 mt-4">Ready to start?</h1>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-extralight mb-3">
              Register to discover your favorites
            </h2>

            <form className="flex flex-col w-full p-4 md:mx-auto max-w-lg " onSubmit={ onSubmit }>
              <label className="font-semibold mb-2">Name</label>
              <input
                type="text"
                className={`p-3 rounded-lg border border-gray-400 ${errors.password?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="Enter your name"
                maxLength="50"
                { ...register("name", {
                  required: {
                    value: true,
                    message: "Name is required"
                  },
                  minLength: {
                    value: 3,
                    message: "The minimum name is 3"
                  }
                }) }
              />
              {
                errors.name && <span className="text-red-600 mb-1 text-xs">{ errors.name.message }</span> 
              }

              <label className="font-semibold mb-2">Email</label>
              <input
                type="email"
                className={`p-3 rounded-lg border border-gray-400 ${errors.password?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="Enter your email"
                { ...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "The mail is invalid"
                  }
                }) }
              />
              {
                errors.email && <span className="text-red-600 mb-1 text-xs">{ errors.email.message }</span> 
              }

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className={`p-3 rounded-lg border border-gray-400 ${errors.password?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="********"
                { ...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value: 6,
                    message: "Password minimum 6 letters"
                  }
                }) }
              />
              {
                errors.password && <span className="text-red-600 text-xs mb-1">{ errors.password.message }</span> 
              }

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className={`p-3 rounded-lg border border-gray-400 ${ errors.confirmPassword?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="********"
                { ...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required"
                  },
                  validate: (value) => value === watch("password") || "Passwords do not match"
                }) }
              />
              {
                errors.confirmPassword && <span className="text-red-600 text-xs mb-4">{ errors.confirmPassword.message }</span> 
              }

              <button className="bg-[#EA454C] text-white p-3 rounded-lg mb-3 font-semibold">
                Register
              </button>
              <button className="bg-[#6B6B6B] text-white p-3 rounded-lg font-semibold">
                Register with Google
              </button>
            </form>
            <div className="flex justify-between gap-36 decoration underline p-2">
              <span className="cursor-pointer" onClick={ onAlreadyHaveAccount }>Already have account?</span>
              <span>Forget your account?</span>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
