import { motion } from 'framer-motion';
import { PlayCircle, FileText, CheckCircle2, MonitorPlay } from 'lucide-react';
import { toast } from 'sonner';

export function Theory() {
  const handlePurchase = () => {
    toast.success('Przekierowywanie do płatności...', {
      description: 'To jest wersja demonstracyjna. Płatności są wyłączone.',
    });
  };

  return (
    <section id="theory" className="py-14 md:py-20 relative bg-[#040F1A] overflow-hidden border-y border-white/5">
      {/* Looping Marquee Animation */}
      <div className="absolute top-10 left-0 right-0 flex whitespace-nowrap opacity-[0.03] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-6xl md:text-8xl font-bold tracking-tighter"
        >
          <span>TEORIA ONLINE</span>
          <span>•</span>
          <span>オンライン理論</span>
          <span>•</span>
          <span>TESTY</span>
          <span>•</span>
          <span>テスト</span>
          <span>•</span>
          <span>WIDEO</span>
          <span>•</span>
          <span>ビデオ</span>
          <span>•</span>
          <span>TEORIA ONLINE</span>
          <span>•</span>
          <span>オンライン理論</span>
          <span>•</span>
          <span>TESTY</span>
          <span>•</span>
          <span>テスト</span>
          <span>•</span>
          <span>WIDEO</span>
          <span>•</span>
          <span>ビデオ</span>
          <span>•</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6">
            Teoria w Twoim tempie.
          </h2>
          <p className="text-lg md:text-xl text-[#6B8CA4] mb-8 md:mb-10 tracking-tight leading-relaxed">
            Przygotuj się do egzaminu państwowego z naszą autorską platformą e-learningową. 
            Wykłady wideo, interaktywne quizy i oficjalna baza pytań egzaminacyjnych PWPW.
          </p>

          <div className="space-y-6 mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                <MonitorPlay className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Wykłady Wideo</h4>
                <p className="text-[#6B8CA4] text-sm">Oglądaj na telefonie, tablecie lub komputerze.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Oficjalne Testy</h4>
                <p className="text-[#6B8CA4] text-sm">100% pytań z bazy WORD.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Materiały PDF</h4>
                <p className="text-[#6B8CA4] text-sm">Pobierz skrypty i notatki do nauki offline.</p>
              </div>
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-[#22D3EE] rounded-full hover:bg-[#06B6D4] transition-colors"
          >
            Kup dostęp za 149 PLN
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative w-full"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#020B14]">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
              alt="E-learning platform" 
              className="w-full h-auto opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
              <button 
                onClick={handlePurchase}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform group"
              >
                <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#22D3EE] transition-colors" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
