import { Navbar } from "../components/Navbar";

export function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="flex w-full">
          {/* Sección izquierda con la imagen */}
          <section className="hidden md:flex md:w-1/2 h-full">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src="./NikeRegister.jpeg"
                alt="Nike Image Register Page"
                className="w-full h-full"
              />
            </div>
          </section>

          {/* Sección derecha para el formulario */}
          <section className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-4">
            <h1 className="text-8xl font-bold mb-4">First Time?</h1>
            <p className="text-4xl font-extralight mb-6">
              Register to discover your favorites
            </p>

            <form className="flex flex-col w-96 max-w-md mt-16">
              <label className="font-semibold mb-2">Name</label>
              <input
                type="text"
                className="p-3 mb-4 rounded-lg border border-black"
                placeholder="Enter your name"
              />

              <label className="font-semibold mb-2">Email</label>
              <input
                type="email"
                className="p-3 mb-4 rounded-lg border border-black"
                placeholder="Enter your email"
              />

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className="p-2 mb-6 rounded-lg border border-black"
                placeholder="********"
              />

              <label className="text-black font-semibold mb-2">Password</label>
              <input
                type="password"
                className="p-2 mb-6 rounded-lg border border-black"
                placeholder="********"
              />

              <button className="bg-[#EA454C] text-white p-3 rounded-lg mb-3">
                Register
              </button>
              <button className="bg-[#6B6B6B] text-white p-3 rounded-lg">
                Register with Google
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
