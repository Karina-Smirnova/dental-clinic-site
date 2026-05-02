import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
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
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className={cn("font-bold text-xl tracking-tight transition-colors", isScrolled ? "text-gray-900" : "text-gray-900 md:text-white")}>
            Lumina<span className="text-teal-600 font-light">Dental</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-500",
                    isScrolled ? "text-gray-600" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className={cn("flex items-center gap-2 text-sm font-medium transition-colors hover:text-teal-500", isScrolled ? "text-gray-700" : "text-white")}>
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </a>
            <a
              href="#book"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Calendar size={16} />
              <span>Book Online</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden p-2 -mr-2", isScrolled ? "text-gray-900" : "text-gray-900")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-gray-800 font-medium hover:bg-teal-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-4 pt-2 border-t border-gray-100">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-800 font-medium py-2">
              <Phone size={18} className="text-teal-600" />
              <span>(555) 123-4567</span>
            </a>
            <a
              href="#book"
              className="bg-teal-600 text-white px-5 py-3 rounded-xl text-center font-medium flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
