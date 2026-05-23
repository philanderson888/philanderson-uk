import { NavLink } from 'react-router-dom';
import { Menu, Lock } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/charity-work', label: 'Charity Work' },
    { path: '/wiki', label: 'Wiki' },
    { path: '/personal', icon: Lock, ariaLabel: 'Personal Section' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-semibold text-warm-800 hover:text-warm-900 transition-colors">
              Phil Anderson
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-warm-600 hover:text-warm-900 transition-colors ${
                    isActive ? 'text-warm-900 font-medium' : ''
                  }`
                }
                aria-label={item.ariaLabel}
              >
                {item.icon ? <item.icon size={20} /> : item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-600 hover:text-warm-900"
              aria-label="Toggle menu"
              aria-expanded={isOpen ? true : false}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium ${
                      isActive
                        ? 'text-warm-900 bg-warm-50'
                        : 'text-warm-600 hover:text-warm-900 hover:bg-warm-50'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  aria-label={item.ariaLabel}
                >
                  {item.icon ? <item.icon size={20} /> : item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}