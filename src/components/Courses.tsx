import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Bike, Car, Truck } from 'lucide-react';
import { useBookingStore } from '../store/useBookingStore';
import { SpotlightCard } from './reactbits/SpotlightCard';

const categories = [
  {
    id: 'A',
    name: 'Kategoria A',
    subtitle: 'Motocykle bez ograniczeń.',
    price: '2 500 PLN',
    icon: <Bike className="w-10 h-10 md:w-12 md:h-12 text-[#22D3EE] mb-4 md:mb-6" />,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    features: [
      '30h teorii online',
      '20h jazd praktycznych',
      'Nowe motocykle Yamaha',
      'Plac manewrowy w centrum',
    ],
    bgClass: 'bg-[#061220]',
    textColor: 'text-white',
    accentColor: 'text-[#22D3EE]',
  },
  {
    id: 'B',
    name: 'Kategoria B',
    subtitle: 'Samochody osobowe.',
    priceManual: '3 200 PLN',
    priceAuto: '3 400 PLN',
    icon: <Car className="w-10 h-10 md:w-12 md:h-12 text-[#22D3EE] mb-4 md:mb-6" />,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
    features: [
      '30h teorii online',
      '30h jazd praktycznych',
      'Symulator VR (2h)',
      'Egzamin wewnętrzny',
    ],
    bgClass: 'bg-[#061220]',
    textColor: 'text-white',
    accentColor: 'text-[#22D3EE]',
    popular: true,
  },
  {
    id: 'C',
    name: 'Kategoria C',
    subtitle: 'Pojazdy ciężarowe.',
    price: '4 500 PLN',
    icon: <Truck className="w-10 h-10 md:w-12 md:h-12 text-[#22D3EE] mb-4 md:mb-6" />,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
    features: [
      '20h teorii specjalistycznej',
      '30h jazd praktycznych',
      'Nowoczesne ciągniki siodłowe',
      'Egzamin państwowy w cenie',
    ],
    bgClass: 'bg-[#061220]',
    textColor: 'text-white',
    accentColor: 'text-[#22D3EE]',
  },
];

export function Courses() {
  const [transmission, setTransmission] = useState<'manual' | 'automatic'>('manual');
  const setStoreCategory = useBookingStore(state => state.setCategory);
  const setStoreTransmission = useBookingStore(state => state.setTransmission);

  const handleSelect = (catId: string) => {
    setStoreCategory(catId);
    if (catId === 'B') {
      setStoreTransmission(transmission);
    }
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-14 md:py-20 relative bg-[#020B14]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6"
          >
            Wybierz swoją drogę.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#6B8CA4] max-w-2xl mx-auto tracking-tight"
          >
            Szkolimy na każdym sprzęcie. Wybierz kategorię dla siebie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {categories.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group flex flex-col h-full ${
                course.popular ? 'md:scale-105 z-10 popular-card-glow rounded-[2rem]' : ''
              }`}
            >
              <SpotlightCard className={`h-full p-8 md:p-10 flex flex-col ${course.bgClass} ${course.popular ? 'shadow-[0_0_50px_rgba(168,85,247,0.25)] border-[#22D3EE]/40' : ''}`}>
                <div className="h-48 -mx-8 -mt-8 md:-mx-10 md:-mt-10 mb-8 relative overflow-hidden">
                  <img src={course.image} alt={course.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] to-transparent"></div>
                </div>
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-[#22D3EE] text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full tracking-wide whitespace-nowrap z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    NAJPOPULARNIEJSZA
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {course.icon}
                  <h3 className={`text-2xl md:text-3xl font-semibold mb-2 tracking-tight ${course.textColor}`}>{course.name}</h3>
                  <p className="mb-6 md:mb-8 text-sm md:text-base text-[#6B8CA4]">{course.subtitle}</p>
                  
                  {course.id === 'B' ? (
                    <div className="mb-6 md:mb-8">
                      <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl mb-4 w-full">
                        <button
                          onClick={() => setTransmission('manual')}
                          className={`flex-1 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                            transmission === 'manual' ? 'bg-[#22D3EE] text-white shadow-sm' : 'text-white/40 hover:text-white'
                          }`}
                        >
                          Manual
                        </button>
                        <button
                          onClick={() => setTransmission('automatic')}
                          className={`flex-1 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                            transmission === 'automatic' ? 'bg-[#22D3EE] text-white shadow-sm' : 'text-white/40 hover:text-white'
                          }`}
                        >
                          Automat
                        </button>
                      </div>
                      <div className={`text-4xl md:text-5xl font-semibold tracking-tight ${course.textColor}`}>
                        {transmission === 'manual' ? course.priceManual : course.priceAuto}
                      </div>
                    </div>
                  ) : (
                    <div className={`text-4xl md:text-5xl font-semibold mb-6 md:mb-8 tracking-tight ${course.textColor}`}>
                      {course.price}
                    </div>
                  )}

                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm md:text-base text-[#f5f5f7]">
                        <Check className={`w-4 h-4 md:w-5 md:h-5 mr-3 ${course.accentColor} shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelect(course.id)}
                    className={`block w-full text-center py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-colors duration-300 ${
                      course.popular
                        ? 'bg-gradient-to-r from-[#22D3EE] to-[#F59E0B] text-white hover:opacity-90'
                        : 'bg-white/10 text-white hover:bg-[#22D3EE]'
                    }`}
                  >
                    Wybierz {course.name}
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
