import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundImage: "url('/images/home-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '2rem', borderRadius: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Добро пожаловать в Smart Home Shop!
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
          Товары для умного дома по доступным ценам
        </p>
        <Link to="/catalog">
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}>
            Перейти в каталог
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
// import React from "react";
// import { Link } from "react-router-dom";

// const Home: React.FC = () => {
//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
//       style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
//     >

//       {/* затемнение подложки для читаемости */}
//       <div className="absolute inset-0 bg-black bg-opacity-40" />

//       <div className="relative z-10 text-white px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Добро пожаловать в Smart Home Shop!
//         </h1>
//         <p className="text-lg mb-6">Товары для умного дома по доступным ценам</p>
//         <Link to="/catalog">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg">
//             Перейти в каталог
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;