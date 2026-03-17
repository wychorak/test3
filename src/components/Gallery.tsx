import { motion } from 'framer-motion';

const achievements = [
  {
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop',
    title: 'Nowoczesna Flota',
    desc: 'Uczysz się na najnowszych modelach aut, wyposażonych w systemy wspomagania kierowcy.',
    wide: true,
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
    title: '98% Zdawalności',
    desc: 'Nasi kursanci zdają egzamin państwowy za pierwszym razem.',
    wide: false,
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    title: 'Jazdy Nocne',
    desc: 'Przygotowujemy do jazdy w każdych warunkach drogowych.',
    wide: false,
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
    title: 'Centrum Miasta',
    desc: 'Trenujemy na najtrudniejszych skrzyżowaniach.',
    wide: false,
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    title: '10 000+ Absolwentów',
    desc: 'Dołącz do grona zadowolonych kierowców PRIZM.',
    wide: true,
    tall: false,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 relative bg-[#020B14]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-[1px] bg-[#22D3EE]" />
            <span className="text-[#22D3EE] text-xs font-mono tracking-[0.25em] uppercase">Galeria</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Doświadczenie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-[#6B8CA4] max-w-xl tracking-tight"
          >
            Liczby i fakty, które mówią same za siebie.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[280px_280px] md:grid-rows-[320px_320px] gap-3 md:gap-4">
          {/* Item 1 — wide + tall (spans 2 cols, 2 rows) */}
          <GalleryItem item={achievements[0]} className="col-span-2 row-span-2" index={0} />
          {/* Item 2 — normal */}
          <GalleryItem item={achievements[1]} className="col-span-1 row-span-1" index={1} />
          {/* Item 3 — tall (spans 1 col, 2 rows) */}
          <GalleryItem item={achievements[2]} className="col-span-1 row-span-2" index={2} />
          {/* Item 4 — normal */}
          <GalleryItem item={achievements[3]} className="col-span-1 row-span-1" index={3} />
          {/* Item 5 — wide (spans 2 cols, 1 row) hidden on mobile to keep grid clean */}
          <GalleryItem item={achievements[4]} className="hidden md:block col-span-2 row-span-1" index={4} />
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item,
  className,
  index,
}: {
  item: (typeof achievements)[0];
  className: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer border border-white/5 ${className}`}
    >
      <img
        src={item.src}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-tight">
          {item.title}
        </h3>
        <p className="text-[#6B8CA4] text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
          {item.desc}
        </p>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-[#22D3EE]/0 group-hover:border-[#22D3EE]/20 transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
}
