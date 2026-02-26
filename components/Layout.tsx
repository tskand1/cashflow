import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Layers, ChevronDown, MessageCircle, Calculator } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CookieConsent } from './CookieConsent';

interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  children?: { label: string; href: string }[];
  isButton?: boolean;
}

const navStructure: NavItem[] = [
  { label: 'Механизм', href: '/#mechanism' },
  { label: 'Преимущества', href: '/#benefits' },
  { 
    label: 'Активы', 
    isDropdown: true,
    children: [
      { label: 'Легковые авто', href: '/passenger-cars' },
      { label: 'Грузовой транспорт', href: '/cargo-transport' },
      { label: 'Спецтехника', href: '/special-machinery' },
      { label: 'Недвижимость', href: '/real-estate' },
    ]
  },
  { label: 'Налоги', href: '/#taxes' },
  { label: 'Калькулятор', href: '/calculator', isButton: true },
  { label: 'FAQ', href: '/#faq' },
];

const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssetsDropdownOpen, setIsAssetsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAssetsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAssetsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAssetsDropdownOpen(false);
  }, [location]);

  const toggleAssetsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAssetsDropdownOpen(!isAssetsDropdownOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-accent text-white p-2 rounded-xl group-hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-red-500/20">
                <Layers size={24} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tighter text-corporate-900 leading-none">
                  CASHFLOW
                </span>
                <span className="text-[10px] font-bold text-corporate-400 uppercase tracking-widest leading-none mt-1">
                  возвратный лизинг
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-1 items-center">
              {navStructure.map((item, index) => {
                if (item.isDropdown) {
                  return (
                    <div className="relative" ref={dropdownRef} key={index}>
                      <button
                        onClick={toggleAssetsDropdown}
                        onMouseEnter={() => setIsAssetsDropdownOpen(true)}
                        className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-corporate-900 hover:text-accent transition-colors duration-200"
                        aria-expanded={isAssetsDropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isAssetsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isAssetsDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-card p-2 animate-in fade-in slide-in-from-top-2 duration-200"
                          onMouseLeave={() => setIsAssetsDropdownOpen(false)}
                        >
                          {item.children?.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              to={child.href}
                              className="block px-4 py-3 text-sm font-medium text-corporate-600 hover:text-accent hover:bg-gray-50 rounded-xl transition-all"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.isButton) {
                  return (
                    <Link
                      key={index}
                      to={item.href || '/'}
                      className="ml-4 px-6 py-2.5 bg-accent text-white rounded-xl text-sm font-bold hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={index}
                    to={item.href || '/'}
                    className="px-4 py-2 text-sm font-bold text-corporate-900 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 border-2 border-gray-100 text-corporate-900 rounded-xl text-sm font-bold hover:border-corporate-900 transition-all duration-300"
              >
                <MessageCircle size={18} className="text-accent" />
                Консультация
              </a>
              <button 
                className="md:hidden p-2 text-corporate-900 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white animate-in fade-in slide-in-from-right duration-300 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center h-20 px-4 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-3">
                <div className="bg-accent text-white p-2 rounded-xl">
                  <Layers size={24} />
                </div>
                <span className="text-xl font-extrabold tracking-tighter text-corporate-900">CASHFLOW</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
              {navStructure.map((item, index) => {
                if (item.isDropdown) {
                  return (
                    <div key={index} className="space-y-2">
                      <div className="px-4 py-2 text-xs font-bold text-corporate-400 uppercase tracking-widest">
                        {item.label}
                      </div>
                      {item.children?.map((child, childIdx) => (
                        <Link
                          key={childIdx}
                          to={child.href}
                          className="block px-4 py-4 text-xl font-bold text-corporate-900 active:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.href || '/'}
                    className={`block px-4 py-4 text-xl font-bold ${item.isButton ? 'text-accent' : 'text-corporate-900'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="p-4 border-t border-gray-100">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-accent text-white rounded-2xl text-lg font-bold shadow-xl shadow-red-500/20"
              >
                <MessageCircle size={24} />
                Написать эксперту
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-corporate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <div className="bg-accent text-white p-2 rounded-xl">
                  <Layers size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold tracking-tighter leading-none">CASHFLOW</span>
                  <span className="text-[10px] font-bold text-corporate-400 uppercase tracking-widest leading-none mt-1">возвратный лизинг</span>
                </div>
              </Link>
              <p className="text-corporate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Профессиональный сервис по привлечению финансирования через механизм возвратного лизинга для малого и среднего бизнеса.
              </p>
              <div className="flex gap-4">
                <a href={telegramUrl} className="w-12 h-12 bg-corporate-800 rounded-xl flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <MessageCircle size={20} />
                </a>
                <Link to="/calculator" className="w-12 h-12 bg-corporate-800 rounded-xl flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <Calculator size={20} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-bold text-corporate-500 uppercase tracking-widest mb-8">Сервисы</h4>
              <ul className="space-y-4">
                <li><Link to="/passenger-cars" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Легковые авто</Link></li>
                <li><Link to="/cargo-transport" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Грузовой транспорт</Link></li>
                <li><Link to="/special-machinery" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Спецтехника</Link></li>
                <li><Link to="/real-estate" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Недвижимость</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-bold text-corporate-500 uppercase tracking-widest mb-8">Компания</h4>
              <ul className="space-y-4">
                <li><Link to="/contacts" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Контакты</Link></li>
                <li><Link to="/privacy-policy" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/data-processing" className="text-sm font-medium text-corporate-300 hover:text-white transition-colors">Обработка данных</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-bold text-corporate-500 uppercase tracking-widest mb-8">Отказ от ответственности</h4>
              <p className="text-[11px] text-corporate-500 leading-relaxed">
                Информация на сайте носит ознакомительный характер и не является публичной офертой. 
                Все расчеты в калькуляторе являются предварительными. 
                Условия финансирования определяются индивидуально после анализа документов.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-corporate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-corporate-500">
              © {new Date().getFullYear()} Cashflow. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-bold text-corporate-600 uppercase tracking-widest">
              <span>Banking Digital Standard</span>
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              <span>B2B Focused</span>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};