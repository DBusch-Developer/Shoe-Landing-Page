import { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import type { PageName } from './types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  // Navigation handlers
  const switchToHome = (): void => setCurrentPage('home');
  const switchToContact = (): void => setCurrentPage('contact');
  const switchToAbout = (): void => setCurrentPage('about');
  const switchToProduct = (): void => setCurrentPage('product');
  const handleSignIn = (): void => {
    console.log('Sign In clicked');
    alert('Sign In functionality coming soon!');
  };

  // Navigation items configuration
  const navItems = [
    {
      label: 'About',
      onClick: switchToAbout,
      isActive: currentPage === 'about'
    },
    {
      label: 'Products',
      onClick: switchToProduct,
      isActive: currentPage === 'product'
    },
    {
      label: 'Contact',
      onClick: switchToContact,
      isActive: currentPage === 'contact'
    }
  ];

  // Footer configuration
  const footerLinkSections = [
    {
      title: 'Products',
      links: [
        { label: 'Running Shoes', onClick: () => setCurrentPage('product') },
        { label: 'Casual Wear', onClick: () => setCurrentPage('product') },
        { label: 'Formal Shoes', onClick: () => setCurrentPage('product') },
        { label: 'Athletic Gear', onClick: () => setCurrentPage('product') }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', onClick: () => setCurrentPage('about') },
        { label: 'Careers', onClick: () => alert('Careers page coming soon!') },
        { label: 'Press', onClick: () => alert('Press page coming soon!') },
        { label: 'Blog', onClick: () => alert('Blog coming soon!') }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', onClick: () => alert('Help Center coming soon!') },
        { label: 'Contact Us', onClick: () => setCurrentPage('contact') },
        { label: 'Size Guide', onClick: () => alert('Size Guide coming soon!') },
        { label: 'Returns', onClick: () => alert('Returns info coming soon!') }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      onClick: () => alert('Visit our Facebook page!'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      onClick: () => alert('Follow us on Instagram!'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 8.02.01 6.79.048 2.51.206.206 2.51.048 6.79.01 8.02 0 8.396 0 12.017c0 3.621.01 3.997.048 5.227.158 4.28 2.462 6.584 6.742 6.742 1.23.038 1.606.048 5.227.048 3.621 0 3.997-.01 5.227-.048 4.28-.158 6.584-2.462 6.742-6.742.038-1.23.048-1.606.048-5.227 0-3.621-.01-3.997-.048-5.227C23.794 2.51 21.49.206 17.21.048 15.98.01 15.604 0 12.017 0zm0 5.838a6.179 6.179 0 110 12.358 6.179 6.179 0 010-12.358zM12.017 15.55a3.371 3.371 0 10-.001-6.743 3.371 3.371 0 00.001 6.743zm6.624-10.845a1.48 1.48 0 11-2.96 0 1.48 1.48 0 012.96 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      onClick: () => alert('Follow us on Twitter!'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    }
  ];

  const handleNewsletterSignup = (email: string) => {
    console.log('Newsletter signup:', email);
    alert(`Thank you for subscribing with email: ${email}`);
  };

  // Render current page content
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      case 'product':
        return <Product />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar
        activePage={currentPage}
        navItems={navItems}
        onLogoClick={switchToHome}
        onSignInClick={handleSignIn}
      />

      {/* Page Content */}
      <main>
        {renderPageContent()}
      </main>

      {/* Footer */}
      <Footer
        companyName="ShoeStyle"
        contactInfo={{
          email: 'hello@shoestyle.com',
          phone: '(555) 123-4567',
          address: '123 Fashion Street, Style City, SC 12345'
        }}
        linkSections={footerLinkSections}
        socialLinks={socialLinks}
        onNewsletterSignup={handleNewsletterSignup}
      />
    </>
  );
}

export default App;