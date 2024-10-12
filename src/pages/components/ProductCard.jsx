import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {

  return (
    <Link to={`/size/${product._id}`} className="bg-white p-4 rounded-lg shadow-md transition delay-100 hover:-translate-y-4 duration-300 cursor-pointer">
      <div className="relative mb-2">
        <img src={product.imageUrl[0]} alt={product.name} className="w-full h-3/6 object-cover rounded" />
        {product.tag && (
          <span className={`absolute top-2 right-2 px-6 py-3 text-base font-bold text-white rounded ${product.tag === 'HOT' ? 'bg-red-500' : 'bg-green-500'}`}>
            {product.tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
      <div className="flex items-center">


        {product.discount > 0 ? (
          <>
            <span className="text-lg font-bold mr-2">
              ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
            </span>
            <span className="text-lg font-bold mr-2 line-through">${product.price.toFixed(2)}</span>
            <span className="text-md text-green-600 font-semibold">{product.discount}% OFF</span>
          </>
        ) : (
          <span className="text-lg font-bold mr-2">${product.price.toFixed(2)}</span>
        )}
      </div>
    </Link>
  );
};
