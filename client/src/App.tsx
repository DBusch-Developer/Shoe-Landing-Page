import { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Button from './components/ui/Button';
import type { PageName } from './types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  const switchToHome = (): void => setCurrentPage('home');
  const switchToContact = (): void => setCurrentPage('contact');

  return (
    <>
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Button Component Test</h1>
            </div>
            <div className="flex space-x-4">
              <Button
                text="Home"
                variant={currentPage === 'home' ? 'primary' : 'secondary'}
                size="sm"
                onClick={switchToHome}
              />
              <Button
                text="Contact"
                variant={currentPage === 'contact' ? 'primary' : 'secondary'}
                size="sm"
                onClick={switchToContact}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Button Component Testing • Current Page: {currentPage === 'home' ? 'Home' : 'Contact'}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;