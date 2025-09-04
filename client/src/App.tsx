import { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './components/ui/Navbar';
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
      label: 'Product',
      onClick: switchToProduct,
      isActive: currentPage === 'product'
    },
    {
      label: 'Contact',
      onClick: switchToContact,
      isActive: currentPage === 'contact'
    }
  ];

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
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            ShoeStyle • Current Page: {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;