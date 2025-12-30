import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'Features', value: 'home' }, // Scrolls to features if on home, or goes home
    { name: 'Generate', value: 'generate' },
    { name: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value: string) => {
    if (value === 'home' && currentPage !== 'home') {
      onNavigate('home');
    } else if (value !== 'home') {
      onNavigate(value as PageView);
    }
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center font-bold text-white font-display text-xl">
            X
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">XCaro</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <button 
              key={idx}
              onClick={() => handleNavClick(link.value)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.value ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('generate')}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-violet-50 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-dark-bg p-6 flex flex-col justify-center gap-8 z-40">
           {navLinks.map((link, idx) => (
            <button 
              key={idx}
              onClick={() => handleNavClick(link.value)}
              className="text-2xl font-bold text-gray-300 hover:text-white"
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <button 
            onClick={() => handleNavClick('generate')}
            className="w-full bg-white text-black py-4 rounded-lg font-bold text-xl"
          >
            Generate Thumbnail
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;