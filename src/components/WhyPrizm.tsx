import { motion } from 'framer-motion';
import { Zap, Car, ShieldCheck, Trophy } from 'lucide-react';

const features = [
  {
    num: '01',
    icon: Zap,
    title: 'Intensywne Kursy',
    description: 'Zdobądź prawo jazdy w rekordowym czasie. Skondensowana wiedza i maksymalna praktyka.',
    tag: 'Czas to wszystko',
  },
  {
    num: '02',
    icon: Car,
    title: 'Symulatory VR',
    description: 'Poczuj drogę zanim na nią wyjedziesz. Najnowocześniejszy sprzęt VR w Warszawie.',
    tag: 'Technologia VR',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Egzaminy na Miejscu',
    description: 'Zdawaj tam, gdzie się uczysz. Zero stresu, komisja przyjeżdża do nas.',
    tag: 'Pełny komfort',
  },
  {
    num: '04',
    icon: Trophy,
    title: 'Pakiety VIP',
    description: 'Indywidualne podejście, elastyczne godziny i luksusowe auta szkoleniowe.',
    tag: 'Premium',
  },
];

export function WhyPrizm() {
  return (
    <section id="why" className="py-14 md:py-20 relative bg-[#020B14] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34,211,238,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-[1px] bg-[#22D3EE]" />
            <span className="text-[#22D3EE] text-xs font-mono tracking-[0.25em] uppercase">Nasza Przewaga</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Dlaczego PRIZM.
          </motion.h2>
        </div>

        {/* Feature list */}
        <div className="space-y-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-xl bg-[#22D3EE]/0 group-hover:bg-[#22D3EE]/3 transition-colors duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-[#22D3EE] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

                <div className="flex items-start gap-4 sm:gap-6 py-5 sm:py-7 md:py-8 px-3 sm:px-5">
                  {/* Big number — sm+ only */}
                  <span className="hidden sm:block font-mono text-3xl md:text-5xl font-bold text-white/8 group-hover:text-[#22D3EE]/20 transition-colors duration-500 select-none leading-none w-12 md:w-16 shrink-0 pt-1">
                    {feature.num}
                  </span>

                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:gap-10">
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 sm:w-48 md:w-56 shrink-0">
                      {/* Tiny number on mobile */}
                      <span className="sm:hidden font-mono text-base font-bold text-white/20 select-none shrink-0">
                        {feature.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center shrink-0 group-hover:bg-[#22D3EE]/20 group-hover:border-[#22D3EE]/40 transition-all duration-500">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#22D3EE]" />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#6B8CA4] text-sm md:text-base leading-relaxed group-hover:text-[#9BB8C8] transition-colors duration-500 flex-1">
                      {feature.description}
                    </p>

                    {/* Tag — large desktop only */}
                    <span className="hidden xl:inline-flex px-3 py-1 rounded-full border border-white/10 text-white/30 text-xs font-mono tracking-wide group-hover:border-[#22D3EE]/30 group-hover:text-[#22D3EE]/70 transition-all duration-500 shrink-0">
                      {feature.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="h-[1px] bg-white/5" />
        </div>
      </div>
    </section>
  );
}
