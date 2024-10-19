export const Favorites = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="https://via.placeholder.com/200" alt="Nike Air Max Bolt" className="w-full h-48 object-cover mb-4" />
          <h3 className="font-bold">Nike Air Max Bolt</h3>
          <p className="text-gray-600">Tenis para mujer</p>
          <p className="font-bold mt-2">$2,199.00</p>
          <button className="mt-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-full w-full">Agotado</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img src="https://via.placeholder.com/200" alt="Nike Full Force Low" className="w-full h-48 object-cover mb-4" />
          <h3 className="font-bold">Nike Full Force Low</h3>
          <p className="text-gray-600">Calzado para hombre</p>
          <p className="font-bold mt-2">$2,299.00</p>
          <button className="mt-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-full w-full">Agotado</button>
        </div>
      </div>
    </div>
  );
};
