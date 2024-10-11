export const ProductCard = ({ product }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="relative mb-2">
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
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
  