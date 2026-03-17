import { motion } from 'framer-motion';

const achievements = [
  {
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
    title: 'Nowoczesna Flota',
    desc: 'Uczysz się na najnowszych modelach aut wyposażonych w systemy wspomagania kierowcy.',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
    title: '98% Zdawalności',
    desc: 'Nasi kursanci zdają egzamin państwowy za pierwszym razem.',
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    title: 'Jazdy Nocne',
    desc: 'Przygotowujemy do jazdy w każdych warunkach drogowych.',
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    title: 'Centrum Miasta',
    desc: 'Trenujemy na najtrudniejszych skrzyżowaniach.',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    title: '10 000+ Absolwentów',
    desc: 'Dołącz do grona zadowolonych kierowców PRIZM.',
  },
];

function GalleryItem({ item, index, className }: { item: typeof achievements[0]; index: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.07 }}
      className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 ${className ?? ''}`}
    >
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 tracking-tight">{item.title}</h3>
        <p className="text-[#6B8CA4] text-xs sm:text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500 ease-in-out">
          {item.desc}
        </p>
      </div>
      <div className="absolute inset-0 rounded-2xl border border-[#22D3EE]/0 group-hover:border-[#22D3EE]/20 transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-20 relative bg-[#020B14]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-[1px] bg-[#22D3EE]" />
            <span className="text-[#22D3EE] text-xs font-mono tracking-[0.25em] uppercase">Galeria</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Doświadczenie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-[#6B8CA4] tracking-tight"
          >
            Liczby i fakty, które mówią same za siebie.
          </motion.p>
        </div>

        {/* Mobile: simple stacked list */}
        <div className="flex flex-col gap-3 sm:hidden">
          {achievements.map((item, i) => (
            <div key={i} className="relative h-52 rounded-2xl overflow-hidden group border border-white/5">
              <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-[#6B8CA4] text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet / Desktop: bento grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={{ gridTemplateRows: 'auto' }}>
          {/* Item 1 — tall wide */}
          <GalleryItem item={achievements[0]} index={0} className="sm:col-span-2 sm:row-span-2 min-h-[280px] md:min-h-[380px]" />
          {/* Item 2 */}
          <GalleryItem item={achievements[1]} index={1} className="sm:col-span-1 min-h-[180px] md:min-h-[180px]" />
          {/* Item 3 — tall */}
          <GalleryItem item={achievements[2]} index={2} className="sm:col-span-1 sm:row-span-2 min-h-[180px]" />
          {/* Item 4 */}
          <GalleryItem item={achievements[3]} index={3} className="sm:col-span-1 min-h-[180px]" />
          {/* Item 5 — wide */}
          <GalleryItem item={achievements[4]} index={4} className="sm:col-span-2 md:col-span-2 min-h-[180px]" />
        </div>
      </div>
    </section>
  );
}
