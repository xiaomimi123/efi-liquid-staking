import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { detectLanguageByIP } from './i18n';

function App() {
  useEffect(() => {
    // Trigger IP detection on initial load
    detectLanguageByIP();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black font-sans">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-hero-pattern opacity-20 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
