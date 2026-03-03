import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, isSameDay } from 'date-fns';
import { pl } from 'date-fns/locale';
import { useBookingStore } from '../store/useBookingStore';

export function BookLesson() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const openModal = useBookingStore((state) => state.openModal);

  // Generate 14 days from today
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  // Mock booked dates (e.g., tomorrow and 3 days from now)
  const bookedDates = [
    addDays(today, 1),
    addDays(today, 3),
    addDays(today, 6),
    addDays(today, 7),
  ];

  const handleDateSelect = (date: Date) => {
    if (bookedDates.some(d => isSameDay(d, date))) return;
    setSelectedDate(date);
    openModal(date);
  };

  return (
    <section id="book" className="py-20 md:py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6"
          >
            Zarezerwuj jazdę.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto tracking-tight"
          >
            Wybierz termin, który Ci odpowiada.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-panel p-6 md:p-12 rounded-[2rem] shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8 border-b border-white/10 pb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">Wybierz Datę</h3>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium">
              <span className="flex items-center gap-2 text-[#f5f5f7]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> Dostępne
              </span>
              <span className="flex items-center gap-2 text-[#86868b]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div> Zajęte
              </span>
            </div>
          </div>

          {/* Custom Date Picker Grid */}
          <div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 md:gap-4"
          >
            {dates.map((date, i) => {
              const isBooked = bookedDates.some(d => isSameDay(d, date));
              const isSelected = isSameDay(selectedDate, date);
              
              return (
                <button
                  key={i}
                  onClick={() => handleDateSelect(date)}
                  disabled={isBooked}
                  className={`flex flex-col items-center justify-center w-full aspect-square md:aspect-auto md:h-[110px] rounded-2xl transition-all duration-500 ${
                    isBooked 
                      ? 'bg-white/5 border border-white/5 opacity-10 cursor-not-allowed grayscale' 
                      : isSelected 
                        ? 'bg-[#a855f7] text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105 z-10' 
                        : 'bg-white/5 hover:bg-[#a855f7]/10 border border-white/10 hover:border-[#a855f7]/50'
                  }`}
                >
                  <span className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 ${isSelected ? 'text-white/90' : 'text-[#a855f7]'}`}>
                    {format(date, 'EEE', { locale: pl })}
                  </span>
                  <span className={`text-xl md:text-3xl font-bold tracking-tight ${isSelected ? 'text-white' : 'text-[#f5f5f7]'}`}>
                    {format(date, 'd')}
                  </span>
                  <span className={`text-[10px] md:text-xs mt-1 font-medium ${isSelected ? 'text-white/80' : 'text-[#86868b]'}`}>
                    {format(date, 'MMM', { locale: pl })}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
