import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../imports/Velnexa_Group_Logo-removebg.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Materials', href: '/materials' },
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Import/Export', href: '/import-export' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#0B1F3A',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.35)' : '0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '4px 10px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <img
                src={logo}
                alt="Velnexa Group"
                style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', fontWeight: 500 }}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/buy"
              className="ml-3 px-5 py-2.5 rounded-md transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: '#D4AF37',
                color: '#0B1F3A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.01em',
              }}
            >
              Request Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ backgroundColor: '#091929', borderTop: '1px solid rgba(212,175,55,0.18)' }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-md transition-colors ${
                      isActive ? 'text-[#D4AF37] bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/buy"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-md transition-all hover:brightness-110"
                  style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700 }}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
