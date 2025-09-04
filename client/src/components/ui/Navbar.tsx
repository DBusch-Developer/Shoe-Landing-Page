import React, { useState } from 'react';
import Button from './Button';
import Heading from './Heading';

export interface NavbarProps {
  /** Additional CSS classes */
  className?: string;
  /** Current active page for styling */
  activePage?: string;
  /** Navigation items */
  navItems?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
  }>;
  /** Logo text */
  logoText?: string;
  /** Logo click handler */
  onLogoClick?: () => void;
  /** Sign in button handler */
  onSignInClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  className = '',
  activePage,
  navItems = [
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' }
  ],
  logoText = 'ShoeStyle',
  onLogoClick,
  onSignInClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (item: typeof navItems[0]) => {
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false);
    
    if (item.onClick) {
      item.onClick();
    }
  };

  const handleSignInClick = () => {
    setIsMobileMenuOpen(false);
    if (onSignInClick) {
      onSignInClick();
    }
  };

  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={onLogoClick}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009488] rounded-md p-1 -ml-1"
              aria-label="ShoeStyle home"
            >
              <Heading
                text={logoText}
                level={1}
                className="text-2xl font-bold text-gray-900 hover:text-[#009488] transition-colors duration-200"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={item.onClick ? (e) => {
                    e.preventDefault();
                    handleNavItemClick(item);
                  } : undefined}
                  className="text-[#64748B] font-medium text-base leading-none hover:text-[#D59488] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009488] focus:text-[#D59488] transition-colors duration-200 py-2 px-1"
                  aria-current={item.isActive || activePage === item.label.toLowerCase() ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Sign In Button */}
            <Button
              text="Sign In"
              variant="primary"
              size="md"
              onClick={handleSignInClick}
              className="ml-4"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#009488] transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={item.onClick ? (e) => {
                  e.preventDefault();
                  handleNavItemClick(item);
                } : undefined}
                className="text-[#64748B] hover:text-[#D59488] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#009488]"
                aria-current={item.isActive || activePage === item.label.toLowerCase() ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                text="Sign In"
                variant="primary"
                size="md"
                onClick={handleSignInClick}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;