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
  return (
    <div className="bg-[#020B14] min-h-screen text-[#f5f5f7] font-sans selection:bg-[#22D3EE] selection:text-white">
      <Toaster theme="dark" position="bottom-right" toastOptions={{
        style: {
          background: 'rgba(4,15,26,0.9)',
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
