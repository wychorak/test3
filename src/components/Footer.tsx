import { ArrowUp, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-semibold text-2xl tracking-tight text-white">
                PRIZM
              </span>
            </a>
            <p className="text-[#86868b] max-w-sm mb-8 leading-relaxed">
              The most advanced driving school in Warsaw.
              Pro driving. Redefined.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-[#86868b] hover:text-white hover:bg-[#424245] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-[#86868b] hover:text-white hover:bg-[#424245] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-[#86868b] hover:text-white hover:bg-[#424245] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-[#86868b] hover:text-white hover:bg-[#424245] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Menu</h4>
            <ul className="space-y-4">
              <li><a href="#why" className="text-[#86868b] hover:text-white transition-colors">Why PRIZM</a></li>
              <li><a href="#courses" className="text-[#86868b] hover:text-white transition-colors">Courses</a></li>
              <li><a href="#instructors" className="text-[#86868b] hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#gallery" className="text-[#86868b] hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-[#86868b]">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">09:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#86868b]">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#86868b] text-sm">
            &copy; {new Date().getFullYear()} PRIZM DRIVE. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white hover:bg-[#424245] transition-colors group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
