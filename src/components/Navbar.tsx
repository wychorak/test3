import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../utils/cn';
import { toast } from 'sonner';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'PL' | 'EN'>('PL');
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is in middle of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Sections to observe
    const sections = ['why', 'courses', 'theory', 'instructors', 'gallery', 'book'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleLang = () => {
    if (lang === 'PL') {
      toast('English version coming soon. Switching back to Polish.', { icon: '🌍' });
    }
    setLang(lang === 'PL' ? 'EN' : 'PL');
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setActiveSection(href);
  };

  const navLinks = [
    { name: 'Dlaczego my', href: '#why' },
    { name: 'Kategorie', href: '#courses' },
    { name: 'Teoria', href: '#theory' },
    { name: 'Instruktorzy', href: '#instructors' },
    { name: 'Doświadczenie', href: '#gallery' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4 sm:py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={cn(
          'flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500',
          scrolled ? 'glass-panel' : 'bg-transparent'
        )}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="flex items-center gap-2 group">
            <span className="font-semibold text-xl tracking-tight text-white">
              PRIZM
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1",
                  activeSection === link.href 
                    ? "text-white" 
                    : "text-[#6B8CA4] hover:text-white"
                )}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#22D3EE] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA & Lang */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm font-medium text-[#6B8CA4] hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang}
            </button>
            <a
              href="#book"
              onClick={(e) => handleScrollTo(e, '#book')}
              className={cn(
                "inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                activeSection === '#book'
                  ? "bg-[#22D3EE] text-white"
                  : "bg-[#22D3EE] text-[#020B14] hover:bg-[#67E8F9]"
              )}
            >
              Zapisz się
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 rounded-2xl glass-panel flex flex-col space-y-4 md:hidden border border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-lg font-medium transition-colors",
                activeSection === link.href ? "text-[#22D3EE]" : "text-[#6B8CA4] hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-lg font-medium text-white"
            >
              <Globe className="w-5 h-5" />
              {lang === 'PL' ? 'Zmień na EN' : 'Switch to PL'}
            </button>
          </div>
          <a
            href="#book"
            onClick={(e) => handleScrollTo(e, '#book')}
            className={cn(
              "mt-4 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-colors",
              activeSection === '#book' ? "bg-[#22D3EE] text-[#020B14]" : "bg-[#22D3EE] text-[#020B14] hover:bg-[#67E8F9]"
            )}
          >
            Zapisz się
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
