import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Kasia M.',
    text: 'I never thought learning to drive could be this seamless. The VR simulators are a game changer.',
    role: 'Passed on 1st try',
  },
  {
    name: 'Piotr K.',
    text: 'Passionate instructors and a premium experience. PRIZM is more than a school, it is an experience.',
    role: 'Driving for 1 month',
  },
  {
    name: 'Anna W.',
    text: 'Great atmosphere, zero stress. The internal exam prepared me perfectly for the real thing.',
    role: 'Passed on 2nd try',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6"
          >
            Stories.
          </motion.h2>
        </div>

        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full text-center px-4"
            >
              <p className="text-2xl md:text-4xl text-[#f5f5f7] font-medium mb-10 leading-tight tracking-tight">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-semibold text-lg text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-[#86868b] mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-[#424245] hover:bg-[#86868b]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
