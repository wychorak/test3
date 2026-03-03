import { motion } from 'framer-motion';

const achievements = [
  { 
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop', 
    title: 'Nowoczesna Flota', 
    desc: 'Uczysz się na najnowszych modelach aut, wyposażonych w systemy wspomagania kierowcy.',
    span: 'col-span-1 md:col-span-2 row-span-2' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop', 
    title: '98% Zdawalności', 
    desc: 'Nasi kursanci zdają egzamin państwowy za pierwszym razem.',
    span: 'col-span-1 row-span-1' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop', 
    title: 'Jazdy Nocne', 
    desc: 'Przygotowujemy do jazdy w każdych warunkach.',
    span: 'col-span-1 row-span-2' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop', 
    title: 'Centrum Miasta', 
    desc: 'Trenujemy na najtrudniejszych skrzyżowaniach.',
    span: 'col-span-1 row-span-1' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop', 
    title: '10 000+ Absolwentów', 
    desc: 'Dołącz do grona zadowolonych kierowców PRIZM.',
    span: 'col-span-1 md:col-span-2 row-span-1' 
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6"
          >
            Doświadczenie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#86868b] max-w-2xl mx-auto tracking-tight"
          >
            Liczby i fakty, które mówią same za siebie. Zobacz, jak wygląda nauka z PRIZM.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 ${item.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500"></div>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[#86868b] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
