import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="/images/dentist-portrait sarah.jpg" 
                alt="Dr. Sarah Jenkins - Lead Dentist" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-1">Dr. Sarah Jenkins</h3>
                <p className="text-teal-200">Lead Prosthodontist & Founder</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-6 md:-right-12 top-1/4 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-800 font-medium">Years of Experience</div>
              <div className="text-sm text-gray-500 mt-1">Creating beautiful smiles across the country.</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">About Lumina Dental</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Redefining the Dental Experience</h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that a visit to the dentist shouldn't be something to dread. At Lumina Dental, we've created an environment that feels more like a wellness spa than a traditional clinic.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facility combines the latest in dental technology with a compassionate approach to care, ensuring that every treatment is as comfortable and effective as possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Modern, relaxing environment',
                'Advanced 3D imaging technology',
                'Pain-free treatment options',
                'Flexible scheduling & financing',
                'Eco-friendly practices',
                'Comprehensive family care'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Meet the Full Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
