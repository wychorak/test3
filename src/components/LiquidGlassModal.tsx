import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { useBookingStore } from '../store/useBookingStore';
import { X, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const timeSlots = ['09:00', '11:30', '14:00', '17:00'];
const instructors = ['Alex Kowalski', 'Marta Nowak', 'Kamil Wiśniewski', 'Julia Wójcik'];
const packages = ['Standard', 'Intensive', 'VIP'];

export function LiquidGlassModal() {
  const { isModalOpen, selectedDate, closeModal } = useBookingStore();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirm = () => {
    if (!selectedTime || !selectedInstructor || !selectedPackage) {
      toast.error('Please select all options to continue.');
      return;
    }
    
    setIsSuccess(true);
    toast.success('Booking confirmed! See you on the track.');
    
    setTimeout(() => {
      setIsSuccess(false);
      closeModal();
      setSelectedTime(null);
      setSelectedInstructor(null);
      setSelectedPackage(null);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#1d1d1f] p-8 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-[#a855f7] mb-6" />
                </motion.div>
                <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">You're In.</h2>
                <p className="text-[#86868b] text-lg">
                  See you on {selectedDate && format(selectedDate, 'dd MMM yyyy')} at {selectedTime}.
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 text-[#86868b] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">Complete Booking</h2>
                  <p className="text-[#a855f7] font-medium">
                    {selectedDate && format(selectedDate, 'EEEE, MMMM do, yyyy')}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Time Slots */}
                  <div>
                    <h3 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">Select Time</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 rounded-xl font-medium transition-colors duration-200 ${
                            selectedTime === time
                              ? 'bg-[#a855f7] text-white'
                              : 'bg-white/5 text-[#f5f5f7] hover:bg-white/10 border border-white/5'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Instructors */}
                  <div>
                    <h3 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">Select Instructor</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {instructors.map((instructor) => (
                        <button
                          key={instructor}
                          onClick={() => setSelectedInstructor(instructor)}
                          className={`py-3 px-4 rounded-xl font-medium text-left transition-colors duration-200 ${
                            selectedInstructor === instructor
                              ? 'bg-[#a855f7] text-white'
                              : 'bg-white/5 text-[#f5f5f7] hover:bg-white/10 border border-white/5'
                          }`}
                        >
                          {instructor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h3 className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">Select Package</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {packages.map((pkg) => (
                        <button
                          key={pkg}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`py-3 rounded-xl font-medium transition-colors duration-200 ${
                            selectedPackage === pkg
                              ? 'bg-[#a855f7] text-white'
                              : 'bg-white/5 text-[#f5f5f7] hover:bg-white/10 border border-white/5'
                          }`}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Confirm Button */}
                  <button
                    onClick={handleConfirm}
                    className="w-full py-4 rounded-full font-semibold text-lg bg-white text-black hover:bg-gray-200 transition-colors mt-8"
                  >
                    Confirm Booking
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
