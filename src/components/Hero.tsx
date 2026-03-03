import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BlurText } from './reactbits/BlurText';
import { ShinyText } from './reactbits/ShinyText';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background Image with Scroll Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop"
          alt="Sports Car Tokyo"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#a855f7]/20 to-[#050505]"></div>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
      </motion.div>

      {/* Decorative Vertical Text (Asian Aesthetic) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-20"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#a855f7]/50"></div>
        <span className="text-[#a855f7] font-mono text-sm tracking-[0.3em]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          自動車学校
        </span>
        <span className="text-white/50 font-mono text-xs tracking-[0.3em]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          TOKYO DRIFT
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-[#a855f7]/50"></div>
      </motion.div>

      {/* Overlay Content */}
      <motion.div 
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20"
      >
        <BlurText 
          text="PRIZM" 
          delay={0.1}
          className="font-display font-bold text-7xl md:text-[12rem] leading-none tracking-tighter text-white mb-2 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <ShinyText 
            text="NOWY WYMIAR JAZDY" 
            speed={3} 
            className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase text-white drop-shadow-md"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#book"
            onClick={(e) => handleScrollTo(e, '#book')}
            className="group relative px-10 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white tracking-wide">ROZPOCZNIJ KURS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#courses"
            onClick={(e) => handleScrollTo(e, '#courses')}
            className="px-10 py-4 rounded-full bg-black/40 border border-[#a855f7]/30 text-white font-medium text-lg hover:bg-[#a855f7]/20 hover:border-[#a855f7] transition-all duration-300 backdrop-blur-md tracking-wide"
          >
            Odkryj ofertę
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#a855f7]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#a855f7] to-transparent"></div>
      </motion.div>
    </section>
  );
}
