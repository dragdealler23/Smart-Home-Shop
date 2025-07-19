import React from "react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const currentItem = cartItems.find(item => item.id === product.id);
  const quantity = currentItem?.quantity || 0;

  const handleCartAction = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    e.stopPropagation(); // Останавливаем всплытие события
    if (quantity === 0) {
      addToCart(product);
    }
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="high-tech-card hover:border-blue-500/50 transition-all duration-300 w-full block"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 text-white">
        <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">{product.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-2 uppercase tracking-wider">
          {product.category}
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            {product.oldPrice && (
              <span className="text-xs sm:text-sm text-gray-500 line-through mr-1 sm:mr-2">
                {product.oldPrice}₽
              </span>
            )}
            <span className="text-base sm:text-lg font-bold text-blue-400">
              {product.price}₽
            </span>
          </div>

          {quantity === 0 ? (
            <button
              onClick={handleCartAction}
              className="high-tech-button text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              В корзину
            </button>
          ) : (
            <div 
              className="flex items-center bg-gray-800/50 rounded-lg p-0.5"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  decreaseQuantity(product.id);
                }}
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-sm"
              >
                -
              </button>
              <span className="mx-1 sm:mx-2 text-sm sm:text-base text-white min-w-[1rem] text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  increaseQuantity(product.id);
                }}
                className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-sm"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};