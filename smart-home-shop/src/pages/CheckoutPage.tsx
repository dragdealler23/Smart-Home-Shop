import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    console.log("Order submitted", { name, phone, address, cartItems });
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-4 w-screen">
        <div className="high-tech-card p-6 sm:p-8 text-center w-full max-w-md">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">Заказ оформлен!</h1>
          <p className="text-gray-400">Мы свяжемся с вами для подтверждения.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-6 sm:py-8 px-4 sm:px-6 w-screen overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen-md"> {/* Используем max-w-screen-md */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center">
          <span className="text-blue-400">ОФОРМЛЕНИЕ</span> ЗАКАЗА
        </h1>

        <form onSubmit={handleSubmit} className="high-tech-card p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-400 mb-2">Ваше имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="high-tech-input w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-400 mb-2">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="high-tech-input w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-400 mb-2">Адрес доставки</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="high-tech-input w-full"
              required
            />
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h2 className="text-lg font-semibold text-white mb-3 sm:mb-4">Ваш заказ</h2>
            <div className="space-y-2 sm:space-y-3 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-300">
                    {item.title} × {item.quantity}
                  </span>
                  <span className="text-blue-400">{item.price * item.quantity}₽</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-t border-gray-700 pt-3">
              <span className="font-semibold text-white">Итого:</span>
              <span className="font-bold text-xl text-blue-400">{totalPrice}₽</span>
            </div>
          </div>

          <button
            type="submit"
            className="high-tech-button w-full py-3 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
          >
            Подтвердить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";

// const CheckoutPage: React.FC = () => {
//   const { cartItems, totalPrice, clearCart } = useCart();

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!name || !phone || !address) {
//       alert("Пожалуйста, заполните все поля");
//       return;
//     }

//     console.log("Order submitted", { name, phone, address, cartItems });
//     clearCart();
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//           <h1 className="text-2xl font-bold mb-2">Спасибо за заказ!</h1>
//           <p className="text-gray-600">Мы свяжемся с вами для подтверждения.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4 w-screen">
//       <div className="flex flex-col items-center">
//         <div className="w-full max-w-md"> {/* Фиксированная ширина формы */}
//           <h1 className="text-2xl font-bold mb-6 text-center">Оформление заказа</h1>

//           <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Адрес доставки</label>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>

//             <div className="border-t border-gray-200 pt-4">
//               <h2 className="font-semibold text-lg mb-3">Ваш заказ</h2>
//               <div className="space-y-2 mb-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <span className="text-gray-700">
//                       {item.title} × {item.quantity}
//                     </span>
//                     <span className="font-medium">{item.price * item.quantity} ₽</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between border-t border-gray-200 pt-3">
//                 <span className="font-semibold">Итого:</span>
//                 <span className="font-bold text-lg">{totalPrice} ₽</span>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
//             >
//               Подтвердить заказ
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;