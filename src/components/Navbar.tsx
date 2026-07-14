import { useState, useEffect } from 'react';
import { Menu, X, Landmark, HeartHandshake, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'sosial', label: 'Sosial' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'kesehatan', label: 'Kesehatan' },
    { id: 'kemandirian', label: 'Usaha Mandiri' },
    { id: 'tentang', label: 'Tentang Kami' },
  ] as const;

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-ivory/95 backdrop-blur-md shadow-md py-3 border-b border-border-soft'
          : 'bg-warm-ivory/80 backdrop-blur-sm py-5 border-b border-border-soft/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <span className="display-font text-2xl font-bold text-text-heading tracking-tight block leading-none">YSKSP</span>
            <span className="text-[10px] text-primary font-semibold tracking-wider uppercase block mt-1">Salib Putih</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none cursor-pointer ${
                currentPage === link.id
                  ? 'text-primary font-bold'
                  : 'text-text-paragraph hover:text-primary'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 text-text-heading focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-warm-ivory border-b border-border-soft shadow-xl p-6 transition-all duration-300 z-40 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-primary-fixed/30 text-primary'
                    : 'text-text-paragraph hover:bg-black/5 hover:text-primary'
                }`}
              >
                <span>{link.label}</span>
                {currentPage === link.id && <ChevronRight className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
