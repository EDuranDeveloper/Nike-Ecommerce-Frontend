import { Navbar } from '../auth/components/Navbar';
import { ProductCard } from './components/ProductCard';
import Sidebar from './components/Sidebar';

const products = [
  { id: 1, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/1.png', tag: 'HOT' },
  { id: 2, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/2.png', tag: '' },
  { id: 3, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/3.png', tag: 'HOT' },
  { id: 4, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/4.png', tag: 'NEW' },
  { id: 5, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/5.png', tag: '' },
  { id: 6, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/6.png', tag: '' },
  { id: 7, name: 'Nike Air Max 90', category: "Men's Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/7.png', tag: 'HOT' },
  { id: 8, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/8.png', tag: '' },
  { id: 9, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/9.png', tag: 'NEW' },
  { id: 10, name: 'Nike Air Max 90', category: "Kids' Shoes", price: 98.99, originalPrice: 109.99, discount: 10, image: '/Collection/10.png', tag: 'HOT' },
];

const ProductCollectionPage = () => {
  return (
    <div className='bg-[#E8E8E8] rounded-md py-6 '>
      <Navbar navBarPad={"4"} bgColor={"white"}/>
    <div className="px-4 py-8 bg-white mx-4 rounded-md">
      <h1 className="text-2xl font-bold mt-24 mb-6">COLLECTION</h1>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">{products.length} Products</p>
            <button className="text-blue-600 hover:underline">Highest price</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCollectionPage;