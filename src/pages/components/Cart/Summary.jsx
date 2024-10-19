export const Summary = ({ items, totalWithDiscount }) => {
  let isFree = true;

  if (items?.length === 0) {
    return (
      <div className="flex flex-col gap-4 bg-gray-50 md:px-32 md:py-16 p-8 rounded-lg p-auto">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="font-bold">-</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Estimated Shipping & Handling</span>
          <span className="font-bold">-</span>
        </div>
        <div className="flex justify-between mt-4 border-t pt-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">-</span>
        </div>
        <button className="mt-4 bg-gray-400 text-white px-4 py-5 rounded-full w-full" disabled>
          Checkout
        </button>
      </div>
    );
  }

  
  if (totalWithDiscount <= 50) {
    isFree = false;
    totalWithDiscount += 50; 
  }

  return (
    <div className="flex flex-col gap-4 bg-gray-50 md:px-32 md:py-16 p-8 rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="font-bold">${(totalWithDiscount - (isFree ? 0 : 50)).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Estimated Shipping & Handling</span>
        <span className={`font-bold ${isFree ? "text-green-700" : "text-black"}`}>
          {isFree ? "Free" : "$50"}
        </span>
      </div>
      <div className="flex justify-between mt-4 border-t pt-4">
        <span className="font-bold">Total</span>
        <span className="font-bold">${totalWithDiscount.toFixed(2)}</span>
      </div>
      <button className="mt-4 bg-black text-white px-4 py-5 rounded-full w-full">
        Checkout
      </button>
      <button className="mt-2 bg-gray-300 text-gray-700 px-4 py-5 rounded-full w-full">
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
          alt="PayPal"
          className="h-6 mx-auto"
        />
      </button>
    </div>
  );
};
