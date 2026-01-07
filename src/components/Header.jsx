import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { nombre: 'Inicio', href: '#inicio' },
    { nombre: 'Sobre mi', href: '#sobre-mi' },
    { nombre: 'Tecnologias', href: '#tecnologias' },
    { nombre: 'Proyectos', href: '#proyectos' },
    { nombre: 'Experiencia', href: '#experiencia' },
    { nombre: 'contacto', href: '#contacto' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[hsl(var(--cn-black))] border-b-4 border-[hsl(var(--cn-black))] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="text-[hsl(var(--cn-white))] z-50">
              <div className="bg-[hsl(var(--primary))] px-4 py-2 border-3 border-[hsl(var(--cn-black))] shadow-[3px_3px_0_hsl(var(--cn-black))] hover:shadow-[4px_4px_0_hsl(var(--cn-black))]  transition-all duration-200">
                PORTAFOLIO
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {items.map((item, index) => (
                <motion.a
                  key={item.nombre}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-[hsl(var(--cn-white))] px-4 py-2 border-2 border-transparent hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] transition-all duration-200"
                >
                  {item.nombre}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[hsl(var(--cn-white))] bg-[hsl(var(--primary))] p-2 border-3 border-[hsl(var(--cn-black))] shadow-[3px_3px_0_hsl(var(--cn-black))] z-50"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={3} />
              ) : (
                <Menu size={24} strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          className="fixed inset-0 bg-[hsl(var(--cn-black))] z-40 md:hidden pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
            {items.map((item, index) => (
              <motion.a
                key={item.nombre}
                href={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center text-[hsl(var(--cn-white))] py-4 border-4 border-[hsl(var(--cn-white))] shadow-[4px_4px_0_hsl(var(--cn-white))] hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-all duration-200"
              >
                {item.nombre}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
