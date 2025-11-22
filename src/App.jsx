import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

const App = () => {
  const whatsappNumber = "6285888185382";

  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/katalog" element={<CatalogPage />} />
        </Routes>

        <Footer />

        {/* Floating WA Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20tanya%20produk...`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110 flex items-center gap-2 font-semibold pr-6"
        >
          <MessageCircle size={24} fill="white" className="text-transparent" />
          <span>Chat Admin</span>
        </a>

      </div>
    </Router>
  );
};

export default App;
