import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Wiadomość wysłana. Skontaktujemy się wkrótce.');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6"
          >
            Bądźmy w kontakcie.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto tracking-tight"
          >
            Masz pytania? Jesteśmy tu, aby pomóc.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-[#1d1d1f] p-8 md:p-10 rounded-[2rem] border border-white/5">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 tracking-tight">Informacje kontaktowe</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mr-4 md:mr-5 shrink-0">
                    <MapPin className="text-[#a855f7] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm md:text-base">Adres</h4>
                    <p className="text-[#86868b] text-sm md:text-base">ul. Marszałkowska 100<br />00-017 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mr-4 md:mr-5 shrink-0">
                    <Phone className="text-[#a855f7] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm md:text-base">Telefon</h4>
                    <p className="text-[#86868b] text-sm md:text-base">+48 500 600 700</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mr-4 md:mr-5 shrink-0">
                    <Mail className="text-[#a855f7] w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-sm md:text-base">Email</h4>
                    <p className="text-[#86868b] text-sm md:text-base">hello@prizmdrive.pl</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Google Map */}
            <div className="bg-[#1d1d1f] p-2 rounded-[2rem] h-48 md:h-64 relative overflow-hidden border border-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.687311749836!2d21.00931331579674!3d52.23122497976219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf624000001%3A0x1000000000000000!2sMarsza%C5%82kowska%20100%2C%2000-017%20Warszawa!5e0!3m2!1spl!2spl!4v1690000000000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem', filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1d1d1f] p-8 md:p-10 rounded-[2rem] space-y-5 md:space-y-6 border border-white/5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#86868b] mb-2">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all text-sm md:text-base"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#86868b] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all text-sm md:text-base"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#86868b] mb-2">Wiadomość</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none text-sm md:text-base"
                  placeholder="W czym możemy pomóc?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 md:py-4 rounded-full font-semibold bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 mt-4 text-sm md:text-base"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Wysyłanie...</span>
                ) : (
                  <>
                    Wyślij wiadomość <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
