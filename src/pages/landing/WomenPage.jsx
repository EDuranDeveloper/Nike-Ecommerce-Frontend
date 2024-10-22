import { Navbar } from "../../auth/components/Navbar";

export function WomenPage() {
  return (
    <div className="min-h-screen bg-[#E4DFDC] overflow-hidden">
      <Navbar />
      <main className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 p-4 md:p-8">
        {/* Information Section */}
        <section className="flex gap-8 items-center justify-center">
          <div>
            <ul className="flex flex-col text-3xl md:text-5xl gap-6 md:gap-8 pr-12">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-full max-w-[90vw] md:max-w-[600px] gap-y-4 mt-12 2xl:mt-32 overflow-hidden">
              <h1 className="text-5xl md:text-8xl text-[#2D2B2C] font-extrabold leading-tight">
                Nike Air <span className="block">Max Pre-Day</span>
              </h1>
              <p className="text-sm md:text-lg font-light">
                Taking the classic look of heritage Nike Running into a new
                realm, the Nike Air Max Pre-Day brings you a fast-paced look
                that's ready for today's world. A true nod to the past with a
                design made from at least 20% recycled material by weight.
              </p>
            </div>

            <div className="flex items-center mt-8 md:mt-12">
              <button className="bg-[#2D2B2C] text-white px-8 md:px-16 py-2 md:py-4 rounded-lg md:text-xl">
                Add to bag
              </button>
              <h2 className="font-bold text-xl md:text-2xl ml-8 md:ml-12">
                $79.99
              </h2>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative flex items-center justify-center h-[400px] lg:h-[600px] bg-white md:bg-transparent shadow-lg rounded-lg md:shadow-none md:rounded-none">
          <img
            className="transform md:rotate-[-49deg] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[100vw] lg:max-w-none h-auto 2xl:mt-48 4xl:mt-56 md:z-50 pb-24 delay-100 transition-transform duration-300 ease-in-out hover:translate-y-[-500px]"
            src="/Woman.png"
            alt="Nike Image"
          />
        </section>
      </main>

      {/* Fixed Image Gallery */}
      <div className="fixed bottom-0 left-0 w-full bg-[#ded7d2] rounded-lg shadow-lg flex md:justify-start justify-center items-center overflow-hidden p-4 gap-4">
        <img
          className="md:size-48 h-24 object-cover rounded-lg"
          src="/NikeWoman1.jpeg"
          alt="Nike Image 1"
        />
        <img
          className="md:size-48 h-24 object-cover rounded-lg"
          src="/NikeWoman2.png"
          alt="Nike Image 2"
        />
        <img
          className="md:size-48 h-24 object-cover rounded-lg"
          src="/NikeWoman3.png"
          alt="Nike Image 3"
        />
      </div>
    </div>
  );
}
