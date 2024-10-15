import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {

  const {_id, principalImage, name, tag, price, category, discount} = product

  console.log(tag);

  return (
    <Link to={`/size/${_id}`} className="bg-white p-4 rounded-lg shadow-md transition delay-100 hover:-translate-y-4 duration-300 cursor-pointer">
      <div className="relative mb-2">
        <img src={principalImage} alt={name} className="w-full h-3/6 object-cover rounded" />
        {tag && (
          <span className={`absolute top-2 right-2 px-6 py-3 text-base font-bold text-white rounded ${tag === 'HOT' ? 'bg-red-500' : 'bg-green-500'}`}>
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{category}</p>
      <div className="flex items-center">


        {discount > 0 ? (
          <>
            <span className="text-lg font-bold mr-2">
              ${((price * (100 - discount)) / 100).toFixed(2)}
            </span>
            <span className="text-lg font-bold mr-2 line-through">${price.toFixed(2)}</span>
            <span className="text-md text-green-600 font-semibold">{discount}% OFF</span>
          </>
        ) : (
          <span className="text-lg font-bold mr-2">${price.toFixed(2)}</span>
        )}
      </div>
    </Link>
  );
};
