import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: '98%', label: 'Zdawalność' },
  { value: '10k+', label: 'Absolwentów' },
  { value: '8 lat', label: 'Doświadczenia' },
];

const MARQUEE_ITEMS = [
  'KAT. A', 'KAT. B', 'KAT. C', 'VR SYMULATOR', 'JAZDY NOCNE', 'PAKIET VIP',
  'KAT. A', 'KAT. B', 'KAT. C', 'VR SYMULATOR', 'JAZDY NOCNE', 'PAKIET VIP',
];

export function Hero() {
  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#020B14] flex flex-col"
    >
      {/* Background: car image, very subtle */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #020B14 0%, rgba(2,11,20,0.6) 40%, rgba(2,11,20,0.8) 70%, #020B14 100%)' }} />
      </div>

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] pointer-events-none z-0"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.18), transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)' }} />

      {/* Subtle horizontal grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <div key={y} className="absolute left-0 right-0 h-[1px] pointer-events-none z-0"
          style={{ top: `${y}%`, background: 'rgba(34,211,238,0.03)' }} />
      ))}

      {/* ── MAIN content — centred ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-12 pt-20 sm:pt-24 pb-4">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-[#22D3EE] font-mono text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.25em] uppercase max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse shrink-0" />
            <span className="truncate">Szkoła Jazdy · Warszawa · Est. 2016</span>
          </span>
        </motion.div>

        {/* Headline — two lines */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="font-display font-black leading-[0.88] tracking-tighter text-white"
            style={{ fontSize: 'clamp(3.8rem, 13vw, 10rem)' }}
          >
            PRIZM
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="font-display font-black leading-[0.88] tracking-tighter"
            style={{
              fontSize: 'clamp(3.8rem, 13vw, 10rem)',
              background: 'linear-gradient(90deg, #22D3EE 0%, #67E8F9 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            NAUKA JAZDY.
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[#6B8CA4] text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-10"
        >
          Najbardziej zaawansowana szkoła jazdy w Warszawie. Technologia VR, egzaminy na miejscu i instruktorzy z pasją.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full"
        >
          <button
            onClick={() => handleScrollTo('#book')}
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-[#020B14] transition-all hover:scale-105 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            style={{ background: 'linear-gradient(135deg, #22D3EE, #06B6D4)' }}
          >
            ROZPOCZNIJ KURS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScrollTo('#courses')}
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full font-medium text-sm text-[#6B8CA4] border border-white/10 hover:border-[#22D3EE]/40 hover:text-[#22D3EE] transition-all"
          >
            Odkryj ofertę
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-6 sm:gap-12"
        >
          {STATS.map((s, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 ${i > 0 ? 'pl-6 sm:pl-12 border-l border-white/8' : ''}`}>
              <span className="text-xl sm:text-3xl font-bold text-white tracking-tight">{s.value}</span>
              <span className="text-[9px] sm:text-[10px] text-[#6B8CA4] uppercase tracking-[0.15em]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 flex flex-col items-center pb-6 gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#22D3EE]/50 font-mono">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#22D3EE]/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* ── Bottom marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 overflow-hidden py-3 flex border-t border-white/5 shrink-0"
        style={{ background: 'rgba(34,211,238,0.03)' }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap"
        >
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-[#6B8CA4] font-mono text-xs tracking-[0.2em]">{item}</span>
              <span className="text-[#22D3EE]/25 text-xs">·</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
