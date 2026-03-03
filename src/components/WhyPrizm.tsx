import { motion } from 'framer-motion';
import { Car, Zap, ShieldCheck, Trophy } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-[#a855f7]" />,
    title: 'Intensywne Kursy',
    description: 'Zdobądź prawo jazdy w rekordowym czasie. Skondensowana wiedza i maksymalna praktyka.',
    span: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <Car className="w-8 h-8 text-[#a855f7]" />,
    title: 'Profesjonalne Symulatory',
    description: 'Poczuj drogę zanim na nią wyjedziesz. Najnowocześniejszy sprzęt VR w Warszawie.',
    span: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#a855f7]" />,
    title: 'Egzaminy na Miejscu',
    description: 'Zdawaj tam, gdzie się uczysz. Zero stresu, pełna kontrola nad sytuacją.',
    span: 'md:col-span-1 lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#a855f7]" />,
    title: 'Pakiety VIP',
    description: 'Indywidualne podejście, elastyczne godziny i luksusowe auta szkoleniowe.',
    span: 'md:col-span-2 lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
  },
];

export function WhyPrizm() {
  return (
    <section id="why" className="py-20 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6"
          >
            Dlaczego PRIZM.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto tracking-tight"
          >
            Najnowocześniejsza szkoła jazdy w Warszawie.
            Przełamujemy schematy, łącząc technologię z pasją do jazdy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`${feature.span} h-full`}
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between group cursor-default transition-all hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]">
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0 mix-blend-luminosity" referrerPolicy="no-referrer" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-0 group-hover:bg-black/40 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-black/50 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#86868b] text-sm md:text-base leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
