import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";
import { Link } from "react-router-dom";

const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Не удалось загрузить товары.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-6 px-4 sm:px-6 w-screen overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-white">
          <span className="text-blue-400">КАТАЛОГ</span> ТОВАРОВ
        </h1>

        {isLoading ? (
          <div className="text-center text-gray-400">Загрузка...</div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

// import React, { useEffect, useState } from "react";
// import { ProductCard } from "../components/ProductCard";
// import type { Product } from "../types";

// const CatalogPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/products.json");
//         if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//         setError("Не удалось загрузить товары.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 w-screen">
//       <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
//         Каталог
//       </h1>

//       {isLoading ? (
//         <div className="text-center">Загрузка...</div>
//       ) : error ? (
//         <div className="text-center text-red-600">{error}</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center w-full">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;