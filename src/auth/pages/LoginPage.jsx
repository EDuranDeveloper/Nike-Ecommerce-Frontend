import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors} } = useForm()

  
  const onGetAccount = () => {
    navigate("/auth/register")
  }

  const onSubmit = handleSubmit((data) => {
    console.log(formState);
  })

  return (
    <>
      <Navbar />

      <main className="flex flex-col md:flex-row md:justify-center h-screen overflow-hidden">
        <div className="md:flex md:w-full ">
          {/* Sección izquierda */}
          <section className="bg-[#FFFFFF] md:w-1/2 flex flex-col justify-center items-center h-full p-3 mt-20 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4 text-center">
              Welcome Back!
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl mb-6 font-extralight text-center">
              Please enter your details.
            </p>

            <form onSubmit={ onSubmit } className="flex flex-col w-full max-w-md mt-8 mx-auto">
              <label className="font-semibold mb-2">Email</label>
              <input
                type="text"
                className={`p-3 rounded-lg border border-gray-400 ${errors.password?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="Enter your email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "The mail is invalid"
                  }
                })}
              />
              {
                errors.email && <span className="text-red-600 mb-1 text-xs">{ errors.email.message }</span> 
              }

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className={`p-3 rounded-lg border border-gray-400 ${errors.password?.message ? 'mb-2' : 'mb-4' }  `}
                placeholder="********"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  }
                })}
              />

              {
                errors.password && <span className="text-red-600 mb-4 text-xs">{ errors.password.message }</span> 
              }

              <button className="bg-[#EA454C] text-white p-3 rounded-lg mb-3 font-semibold">
                Sign In
              </button>
              <button className="bg-[#6B6B6B] text-white p-3 rounded-lg font-semibold">
                Sign In with Google
              </button>
            </form>
            <div className="flex justify-between gap-36 m-2 decoration underline">
              <span className="cursor-pointer" onClick={ onGetAccount }>Not get a account?</span>
              <span>Forget your account?</span>
            </div>
          </section>

          {/* Sección derecha */}
          <section className="hidden md:flex md:w-1/2 h-full items-center justify-center overflow-hidden">
            <img
              src="../NikeLogin2.jpg"
              alt="Nike Image Login Page"
              className="object-cover w-full h-full rounded-lg"
            />
          </section>
        </div>
      </main>
    </>
  );
}
