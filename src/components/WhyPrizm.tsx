import { motion } from 'framer-motion';
import { Zap, Car, ShieldCheck, Trophy } from 'lucide-react';

const features = [
  {
    num: '01',
    icon: Zap,
    title: 'Intensywne Kursy',
    description: 'Zdobądź prawo jazdy w rekordowym czasie. Skondensowana wiedza i maksymalna praktyka bez zbędnego czekania.',
    tag: 'Czas to wszystko',
  },
  {
    num: '02',
    icon: Car,
    title: 'Profesjonalne Symulatory',
    description: 'Poczuj drogę zanim na nią wyjedziesz. Najnowocześniejszy sprzęt VR w Warszawie — trening bez ryzyka.',
    tag: 'Technologia VR',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Egzaminy na Miejscu',
    description: 'Zdawaj tam, gdzie się uczysz. Zero stresu, pełna kontrola. Komisja egzaminacyjna przyjeżdża do nas.',
    tag: 'Pełny komfort',
  },
  {
    num: '04',
    icon: Trophy,
    title: 'Pakiety VIP',
    description: 'Indywidualne podejście, elastyczne godziny i luksusowe auta szkoleniowe. Nauka na najwyższym poziomie.',
    tag: 'Premium',
  },
];

export function WhyPrizm() {
  return (
    <section id="why" className="py-16 md:py-24 relative bg-[#020B14] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-[1px] bg-[#22D3EE]" />
            <span className="text-[#22D3EE] text-xs font-mono tracking-[0.25em] uppercase">Nasza Przewaga</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
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
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-2xl bg-[#22D3EE]/0 group-hover:bg-[#22D3EE]/4 transition-colors duration-500 pointer-events-none" />

                {/* Separator line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />

                <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_200px] gap-4 md:gap-8 items-center py-7 md:py-9 px-3 md:px-6">
                  {/* Number */}
                  <div className="flex items-center">
                    <span className="font-mono text-4xl md:text-5xl font-bold text-white/8 group-hover:text-[#22D3EE]/20 transition-colors duration-500 select-none tabular-nums leading-none">
                      {feature.num}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                    <div className="flex items-center gap-4 min-w-[220px]">
                      <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center shrink-0 group-hover:bg-[#22D3EE]/20 group-hover:border-[#22D3EE]/40 transition-all duration-500">
                        <Icon className="w-5 h-5 text-[#22D3EE]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-[#6B8CA4] text-sm md:text-base leading-relaxed max-w-xl group-hover:text-[#aaaaaa] transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>

                  {/* Tag */}
                  <div className="hidden md:flex justify-end">
                    <motion.span
                      className="px-3 py-1 rounded-full border border-white/10 text-white/30 text-xs font-mono tracking-wide group-hover:border-[#22D3EE]/30 group-hover:text-[#22D3EE]/70 transition-all duration-500"
                    >
                      {feature.tag}
                    </motion.span>
                  </div>
                </div>

                {/* Animated left border on hover */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-[#22D3EE] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                />
              </motion.div>
            );
          })}
          {/* Bottom separator */}
          <div className="h-[1px] bg-white/5" />
        </div>
      </div>
    </section>
  );
}
