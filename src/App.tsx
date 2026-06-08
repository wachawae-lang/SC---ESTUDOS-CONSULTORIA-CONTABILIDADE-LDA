import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Entrance Animation */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Website Structure */}
      {!isLoading && (
        <div className="min-h-screen bg-brand-light font-sans text-slate-800 antialiased overflow-x-hidden">
          {/* Menu / Header Block */}
          <Header />

          {/* Page Contents */}
          <main>
            {/* 1. Hero Landing */}
            <Hero />

            {/* 2. Institutional About Section */}
            <About />

            {/* 3. High-Performance Services */}
            <Services />

            {/* 4. Stats Counters */}
            <Stats />

            {/* 5. Company Differentiators */}
            <Differentials />

            {/* 6. Clients Testimonials */}
            <Testimonials />

            {/* 7. Form & Location Contacts */}
            <Contact />
          </main>

          {/* Footer Block */}
          <Footer />

          {/* Extras: Floating WhatsApp communication button */}
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
