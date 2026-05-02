import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Modern dental clinic" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold tracking-wider mb-6 border border-teal-500/30">
              NEW CLINIC NOW OPEN
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Modern Dentistry for a <span className="text-teal-400">Brighter Smile</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Experience state-of-the-art dental care in a relaxing environment. Our expert team is dedicated to your oral health and beautiful smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#book" 
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 group"
              >
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center"
              >
                Our Services
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-teal-400" />
                <span>Top-rated specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-teal-400" />
                <span>Painless treatments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} className="text-teal-400" />
                <span>Advanced technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
