import { useState } from "react";
import { Navbar } from "../auth/components/Navbar";

export function SelectSizePage() {
  const sizes = [
    "CM 16.5",
    "CM 17",
    "CM 17.5",
    "CM 18",
    "CM 18.5",
    "CM 19",
    "CM 19.5",
    "CM 20",
    "CM 20.5",
    "CM 21",
    "CM 21.5",
    "CM 22",
  ];

  const colors = [
    "#30D5C8",
    "#E0FFFF",
    "#FFA500",
    "#9ACD32",
    "#2F4F4F",
    "#DC143C",
    "#FF69B4",
    "#000000",
  ];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

 

  return (
    <div className="h-screen bg-white flex flex-col p-5 overflow-hidden">
      <Navbar navBarPad={"4"} />

      <div className="flex-grow max-w-8xl mx-auto bg-[#E8E8E8] rounded-lg shadow-lg flex flex-col px-6">
        {/* Mid Section */}
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          {/* Text Section */}
          <div className="md:w-1/3 flex-col">
            <h2 className="text-3xl font-semibold text-gray-500">KID'S SHOE</h2>
            <h1 className="text-7xl font-extrabold mt-2">NIKE AIR MAX 90</h1>
            <p className="mt-4 text-lg font-light text-gray-600">
              Taking the classic look of heritage Nike Running into a new realm,
              the Nike Air Max 90 brings you a fast-paced look.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center md:w-1/3">
            <img
              src="/KIDS_SHOES/Yellow/Remove-bg.ai_1727323893674.png"
              alt="Nike Air Max 90"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Select Sizes & Colors Section */}
          <div className="md:max-w-full flex-grow">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">SELECT SIZE (MX)</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-3 border rounded-lg  ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">SELECT COLOR</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`size-14 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section inside the gray background */}
          <div className="flex bg-white mx-24 rounded-xl justify-between p-8">
            

            {/* Image Carousel */}
            <div className="flex gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/KIDS_SHOES/Yellow/${i}.png`}
                  alt={`Nike Air Max 90 view ${i}`}
                  className="size-32 object-cover rounded-lg cursor-pointer"
                />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-4">
                <button className="bg-black text-white px-12 py-6 rounded-lg font-semibold">
                  ADD TO BAG
                </button>
                <span className="text-2xl font-bold">$99.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
