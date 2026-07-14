import { useState, useEffect } from 'react';
import { PageType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sosial from './pages/Sosial';
import Pendidikan from './pages/Pendidikan';
import Kesehatan from './pages/Kesehatan';
import Kemandirian from './pages/Kemandirian';
import Tentang from './pages/Tentang';
import { Landmark, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Page based on State
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'sosial':
        return <Sosial />;
      case 'pendidikan':
        return <Pendidikan />;
      case 'kesehatan':
        return <Kesehatan />;
      case 'kemandirian':
        return <Kemandirian />;
      case 'tentang':
        return <Tentang />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-warm-ivory text-text-paragraph font-sans flex flex-col relative">
      
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20 relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-olive-hover text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer focus:outline-none"
          title="Scroll ke Atas"
          aria-label="Scroll ke atas"
        >
          <ArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}

    </div>
  );
}
