import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-4 sm:py-8 px-3 sm:px-6 w-screen overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto overflow-x-hidden">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-white">
          <span className="text-blue-400">ВАША</span> КОРЗИНА
        </h1>

        {cartItems.length === 0 ? (
          <div className="high-tech-card p-6 text-center max-w-md mx-auto">
            <p className="text-gray-400 mb-4">Ваша корзина пуста</p>
            <Link 
              to="/catalog" 
              className="high-tech-button inline-block px-6 py-2 text-sm sm:text-base"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Заголовки для списка товаров (только на больших экранах) */}
            <div className="hidden sm:grid grid-cols-12 gap-4 high-tech-card p-4 mb-2">
              <div className="col-span-6 text-gray-400 font-medium">Товар</div>
              <div className="col-span-3 text-gray-400 font-medium text-center">Количество</div>
              <div className="col-span-2 text-gray-400 font-medium text-right">Сумма</div>
              <div className="col-span-1"></div>
            </div>

            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="high-tech-card p-4 grid grid-cols-12 gap-3 items-center"
              >
                {/* Товар */}
                <div className="col-span-12 sm:col-span-6 flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base text-white font-medium line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">{item.category}</p>
                    <p className="text-xs sm:text-sm text-blue-400 sm:hidden">
                      {item.price}₽ × {item.quantity} = {item.price * item.quantity}₽
                    </p>
                  </div>
                </div>

                {/* Количество (мобильная версия) */}
                <div className="col-span-8 sm:hidden">
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white"
                    >
                      -
                    </button>
                    <span className="mx-2 text-white text-center flex-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Количество (десктоп версия) */}
                <div className="hidden sm:flex col-span-3 justify-center">
                  <div className="flex items-center bg-gray-800/50 rounded-lg p-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white"
                    >
                      -
                    </button>
                    <span className="mx-3 text-white">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Сумма (десктоп) */}
                <div className="hidden sm:block col-span-2 text-right text-blue-400">
                  {item.price * item.quantity}₽
                </div>

                {/* Удалить */}
                <div className="col-span-4 sm:col-span-1 flex justify-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Итого и кнопки */}
            <div className="high-tech-card p-6 mt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Общая сумма:</h3>
                  <p className="text-blue-400 text-xl sm:text-2xl font-bold">
                    {totalPrice}₽
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={clearCart}
                    className="high-tech-button bg-red-500 hover:bg-red-600 px-6 py-3"
                  >
                    Очистить корзину
                  </button>
                  <Link
                    to="/checkout"
                    className="high-tech-button bg-green-500 hover:bg-green-600 px-6 py-3 text-center"
                  >
                    Оформить заказ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
