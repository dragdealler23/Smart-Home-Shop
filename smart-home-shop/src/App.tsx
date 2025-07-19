import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import CatalogPage from "./pages/CatalogPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header /> {/* ✅ вставлен сюда */}
        <main className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
