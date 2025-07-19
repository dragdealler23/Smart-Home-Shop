import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="high-tech-header sticky top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center">
      <Link to="/" className="text-lg sm:text-xl font-bold text-white flex items-center">
        <span className="text-blue-400">SMART</span>
        <span className="text-gray-300">HOME</span>
      </Link>
      
      <Link
        to="/cart"
        className="relative p-1 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {totalCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] sm:text-xs font-bold h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center rounded-full">
            {totalCount}
          </span>
        )}
      </Link>
    </header>
  );
};
export default Header;