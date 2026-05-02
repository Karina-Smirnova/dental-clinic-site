import { motion } from 'framer-motion';
import { Sparkles, Syringe, ShieldPlus, Baby, Stethoscope, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: 'General Dentistry',
    description: 'Comprehensive check-ups, cleanings, and preventive care to keep your smile healthy and bright.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to enhance the natural beauty of your teeth.',
  },
  {
    icon: <ShieldPlus size={32} />,
    title: 'Restorative Care',
    description: 'Crowns, bridges, and implants to restore the function and appearance of missing or damaged teeth.',
  },
  {
    icon: <Baby size={32} />,
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care tailored specifically for children to build lifelong healthy habits.',
  },
  {
    icon: <Syringe size={32} />,
    title: 'Oral Surgery',
    description: 'Expert extractions including wisdom teeth, performed with maximum comfort and care.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Emergency Care',
    description: 'Prompt attention for dental emergencies to relieve pain and address urgent oral health issues.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Dental Care</h3>
          <p className="text-lg text-gray-600">
            We offer a full range of dental services using the latest technology to ensure you receive the best possible care in a comfortable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
