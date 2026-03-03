import { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'sonner';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyPrizm } from './components/WhyPrizm';
import { Courses } from './components/Courses';
import { Theory } from './components/Theory';
import { Instructors } from './components/Instructors';
import { BookLesson } from './components/BookLesson';
import { LiquidGlassModal } from './components/LiquidGlassModal';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-[#f5f5f7] font-sans selection:bg-[#a855f7] selection:text-white">
      <Toaster theme="dark" position="bottom-right" toastOptions={{
        style: {
          background: 'rgba(29, 29, 31, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#f5f5f7',
          borderRadius: '16px',
        }
      }} />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <WhyPrizm />
        <Courses />
        <Theory />
        <Instructors />
        <BookLesson />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <LiquidGlassModal />
    </div>
  );
}
