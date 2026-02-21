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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-corporate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-corporate-500 rounded-sm">
              <div className="bg-corporate-900 text-white p-2 rounded-sm group-hover:bg-corporate-800 transition-colors">
                <Layers size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-tight text-corporate-900 leading-none">
                  CASHFLOW
                </span>
                <span className="text-[10px] font-medium text-corporate-500 uppercase tracking-widest leading-none mt-1">
                  возвратный лизинг для бизнеса
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
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-corporate-600 hover:text-corporate-900 transition-colors duration-200 rounded-sm focus:outline-none focus:bg-corporate-50"
                        aria-expanded={isAssetsDropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${isAssetsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isAssetsDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 w-56 bg-white border border-corporate-100 shadow-lg rounded-sm py-2 mt-1 z-50"
                          onMouseLeave={() => setIsAssetsDropdownOpen(false)}
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-3 text-sm text-corporate-700 hover:bg-corporate-50 hover:text-corporate-900 transition-colors"
                              onClick={() => setIsAssetsDropdownOpen(false)}
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
                      to={item.href!}
                      className="px-4 py-2 ml-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors duration-200 flex items-center gap-1.5"
                    >
                      <Calculator size={16} />
                      {item.label}
                    </Link>
                   );
                }

                return (
                  <Link
                    key={index}
                    to={item.href!}
                    className="px-4 py-2 text-sm font-medium text-corporate-600 hover:text-corporate-900 transition-colors duration-200 rounded-sm focus:outline-none focus:bg-corporate-50"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-corporate-900 text-white text-sm font-medium rounded-sm hover:bg-corporate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-900 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Консультация
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-corporate-900 p-2 rounded-sm focus:outline-none focus:bg-corporate-50"
                aria-label="Меню"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-corporate-100 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navStructure.map((item, index) => {
                if (item.isDropdown) {
                  return (
                    <div key={index} className="space-y-1">
                      <button
                        onClick={() => setIsAssetsDropdownOpen(!isAssetsDropdownOpen)}
                        className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-corporate-700 hover:bg-corporate-50 rounded-sm"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isAssetsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAssetsDropdownOpen && (
                        <div className="pl-6 space-y-1 border-l-2 border-corporate-100 ml-3">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-3 py-2 text-sm font-medium text-corporate-600 hover:text-corporate-900 rounded-sm"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={index}
                    to={item.href!}
                    className={`block px-3 py-3 text-base font-medium rounded-sm ${item.isButton ? 'text-emerald-700 bg-emerald-50' : 'text-corporate-700 hover:bg-corporate-50'}`}
                  >
                    {item.isButton && <Calculator size={16} className="inline mr-2 -mt-0.5" />}
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="pt-4 px-3">
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-corporate-900 text-white text-base font-medium rounded-sm hover:bg-corporate-800 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle size={18} />
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-corporate-900 text-corporate-300 py-12 border-t border-corporate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">О сервисе</h4>
              <p className="text-xs leading-relaxed text-corporate-400">
                Cashflow — информационно-аналитический сервис. Мы не являемся лизинговой компанией, банком или кредитной организацией. Сервис оказывает исключительно информационно-консультационные услуги по подбору финансовых решений.
              </p>
              <div className="mt-4 text-xs text-corporate-500">
                <p>ИП Иванов И.И. (Placeholder)</p>
                <p>ИНН 770000000000</p>
                <p>info@cashflow.ru</p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Меню</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/calculator" className="hover:text-white transition-colors">Калькулятор лизинга</Link></li>
                <li><Link to="/finansirovanie-biznesa" className="hover:text-white transition-colors">Финансирование бизнеса</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-xs text-corporate-500">
                <li><Link to="/privacy-policy" className="hover:text-corporate-300">Политика конфиденциальности</Link></li>
                <li><Link to="/data-processing" className="hover:text-corporate-300">Обработка персональных данных</Link></li>
              </ul>
              <div className="mt-4 text-[10px] text-corporate-600 leading-relaxed">
                <p className="mb-2">
                  Информация на сайте не является публичной офертой (ст. 437 ГК РФ).
                </p>
                <p className="text-corporate-500/80 italic">
                  Предупреждение: Изучите все условия договора лизинга и оцените финансовые риски перед заключением сделки.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-corporate-800 text-center text-[10px] text-corporate-600">
            © {new Date().getFullYear()} Cashflow. Все права защищены.
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};