import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about', href: '', isExternal: false },
    { label: 'Projects', id: 'projects', href: '', isExternal: false },
    { label: 'Experience', id: 'experience', href: '', isExternal: false },
    { label: 'Education', id: 'education', href: '', isExternal: false },
    { label: 'Skills', id: 'skills', href: '', isExternal: false },
    { label: 'Contact', id: 'contact', href: '', isExternal: false },
    { label: 'Resume', id: '', href: '/Anagh_Jaiswar_Resume.pdf', isExternal: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white hover:text-neutral-300 transition-colors cursor-pointer"
          >
            Anagh Jaiswar
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-neutral-400 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id!)}
                    className="text-neutral-400 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}