import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Thompson',
    role: 'Patient since 2021',
    content: "I've always had severe anxiety about visiting the dentist, but the team at Lumina completely changed that. They are incredibly gentle, explain everything clearly, and the environment is so calming.",
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Patient since 2023',
    content: "The cosmetic work Dr. Jenkins did on my front teeth is absolutely stunning. I can't stop smiling! The attention to detail and perfectionism really shows in the final result.",
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    role: 'Patient since 2022',
    content: "State-of-the-art facility with a team that truly cares. I had an emergency over the weekend and they got me in immediately. Exceptional service from the front desk to the dental chair.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-teal-800/50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-teal-950/50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">What Our Patients Say</h3>
          <p className="text-lg text-teal-100">
            Don't just take our word for it. Read about the experiences of our satisfied patients who have trusted us with their smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-teal-800/40 backdrop-blur-sm p-8 rounded-2xl border border-teal-700/50 relative"
            >
              <Quote size={40} className="text-teal-600/50 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-teal-50 text-lg mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-teal-300 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
