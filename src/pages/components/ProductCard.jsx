import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const onClicProductCard = () => {
    navigate("/size")
  }

    return (
      <div onClick={onClicProductCard}  className="bg-white p-4 rounded-lg shadow-md transition delay-100 hover:-translate-y-4 duration-300 cursor-pointer">
        <div className="relative mb-2 ">
          <img src={product.image} alt={product.name} className="w-full h-3/6 object-cover rounded" />
          {product.tag && (
            <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded ${product.tag === 'HOT' ? 'bg-red-500' : 'bg-green-500'}`}>
              {product.tag}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex items-center">
          <span className="text-lg font-bold mr-2">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
          <span className="text-md text-green-600 font-semibold">{product.discount}% OFF</span>
        </div>
      </div>
    );
  };
  