import React from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: { url: string; alt: string }[];
    slug: string;
  };
  onAddToCart: (productId: string) => void;
  onMessageAdmin: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onMessageAdmin }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={product.images[0].url} alt={product.images[0].alt} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-lg text-green-600">${product.price.toFixed(2)}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onAddToCart(product.id)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onMessageAdmin(product.id)}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
        >
          Message Admin
        </button>
      </div>
    </div>
  );
};

export default ProductCard;