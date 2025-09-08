import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'sustainability':
        return <SustainabilityPage />;
      case 'clients':
        return <ClientsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <Navigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        <main>
          {renderPage()}
        </main>
        
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;