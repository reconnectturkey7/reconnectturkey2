import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { 
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Tüm Paketler', href: '/hizmetler' },
      { label: 'Kentsel Dönüşüm', href: '/surec' },
      { label: 'Arsa Kat Karşılığı', href: '/arsa-kat-karsiligi' },
    ]
  },
  { label: 'Süreç', href: '/surec' },
  { label: 'Örnek Raporlar', href: '/ornek-raporlar' },
  { label: 'SSS', href: '/sss' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-600/30'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-600 border-2 border-gold/30 flex items-center justify-center">
              <span className="text-gold font-bold text-lg lg:text-xl">KD</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg lg:text-xl tracking-tight">KD Ankara</span>
              <span className="block text-slate-400 text-xs">Kentsel Dönüşüm Strateji</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1 ${
                        isActive(link.href) || link.children.some(c => isActive(c.href))
                          ? 'text-orange-500'
                          : 'text-slate-300 hover:text-white hover:bg-navy-700/50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-navy-800 border-navy-600">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          to={child.href}
                          className="text-slate-300 hover:text-white hover:bg-navy-700 cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.href)
                      ? 'text-orange-500'
                      : 'text-slate-300 hover:text-white hover:bg-navy-700/50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:03122361017"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0312 236 10 17</span>
            </a>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5"
            >
              <Link to="/ucretsiz-on-analiz">Ücretsiz Ön Analiz</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-navy-900/98 backdrop-blur-md border-b border-navy-600/30 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                to={link.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                  isActive(link.href)
                    ? 'text-orange-500 bg-navy-800'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className={`block px-4 py-2 text-sm rounded-lg ${
                        isActive(child.href)
                          ? 'text-orange-500'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-navy-600/30 space-y-3">
            <a
              href="tel:03122361017"
              className="flex items-center gap-2 text-slate-300 px-4 py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0312 236 10 17</span>
            </a>
            <Button
              asChild
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
            >
              <Link to="/ucretsiz-on-analiz">Ücretsiz Ön Analiz Başlat</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
