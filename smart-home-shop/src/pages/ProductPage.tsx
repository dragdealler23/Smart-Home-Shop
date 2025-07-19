import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { 
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    cartItems 
  } = useCart();
  
  const [product, setProduct] = React.useState<Product | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) throw new Error('Ошибка загрузки товаров');
        const products: Product[] = await response.json();
        const foundProduct = products.find(p => p.id === Number(productId));
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Товар не найден');
        }
      } catch (err) {
        setError('Ошибка при загрузке товара');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const currentItem = cartItems.find(item => item.id === product?.id);
  const quantity = currentItem?.quantity || 0;

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleDecrease = () => {
    if (product) {
      if (quantity <= 1) {
        removeFromCart(product.id);
      } else {
        decreaseQuantity(product.id);
      }
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Загрузка...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-400">{error}</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-white">Товар не найден</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4 sm:px-6 w-screen overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="high-tech-card p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая часть - изображение */}
          <div className="flex items-center justify-center p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-96 object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Правая часть - информация */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{product.title}</h1>
            <p className="text-sm text-gray-400 uppercase mb-4">{product.category}</p>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-blue-400 mr-4">{product.price}₽</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through">{product.oldPrice}₽</span>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-2">Описание</h2>
              <p className="text-gray-300">{product.description || 'Описание отсутствует'}</p>
            </div>

            <div className="mt-auto">
              {quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="high-tech-button w-full py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                >
                  Добавить в корзину
                </button>
              ) : (
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-2">
                  <button
                    onClick={handleDecrease}
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-lg"
                  >
                    -
                  </button>
                  <span className="text-xl text-white mx-4">
                    {quantity} шт.
                  </span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-lg hover:bg-gray-600 text-white text-lg"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link 
          to="/catalog" 
          className="high-tech-button inline-block mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600"
        >
          ← Вернуться в каталог
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;