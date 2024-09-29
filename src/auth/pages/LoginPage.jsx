import { Navbar } from "../components/Navbar";

export function LoginPage() {
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

            <form className="flex flex-col w-full max-w-md mt-8 mx-auto">
              <label className="font-semibold mb-2">Email</label>
              <input
                type="text"
                className="p-3 mb-4 rounded-lg border border-gray-300"
                placeholder="Enter your email"
              />

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className="p-2 mb-6 rounded-lg border border-gray-300"
                placeholder="********"
              />

              <button className="bg-[#EA454C] text-white p-3 rounded-lg mb-3">
                Sign In
              </button>
              <button className="bg-[#6B6B6B] text-white p-3 rounded-lg">
                Sign In with Google
              </button>
            </form>
          </section>

          {/* Sección derecha */}
          <section className="hidden md:flex md:w-1/2 h-full items-center justify-center overflow-hidden">
            <img
              src="./NikeLogin.jpeg"
              alt="Nike Image Login Page"
              className="object-cover w-full h-full rounded-lg"
            />
          </section>
        </div>
      </main>
    </>
  );
}
