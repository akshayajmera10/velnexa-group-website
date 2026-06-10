import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Factory, Building2, Zap, Settings, Wrench, Car, Ship, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const industries = [
  {
    Icon: Factory,
    name: 'Manufacturing',
    desc: 'Raw material sourcing',
    detail: 'We supply bulk metals and raw materials to manufacturing units across automotive, machinery, and consumer goods sectors.',
    needs: ['Copper wire rods', 'Aluminium billets', 'Steel scrap for re-rolling', 'E-scrap for metal recovery'],
  },
  {
    Icon: Building2,
    name: 'Construction',
    desc: 'Structural metals',
    detail: 'Supplying structural steel, iron, and construction-grade metals to infrastructure and real estate projects.',
    needs: ['HMS Steel', 'Structural scrap', 'Reinforcement steel', 'Aluminium profiles'],
  },
  {
    Icon: Zap,
    name: 'Electrical',
    desc: 'Copper & cables',
    detail: 'Sourcing copper and cable materials for electrical equipment manufacturers, power utilities, and infrastructure companies.',
    needs: ['Copper cathodes', 'Insulated cables', 'Bare bright copper', 'Copper wire rods'],
  },
  {
    Icon: Settings,
    name: 'Engineering & Fabrication',
    desc: 'Metal fabrication',
    detail: 'Supplying ferrous and non-ferrous metals to engineering workshops, fabricators, and precision component manufacturers.',
    needs: ['Brass rods & sections', 'Stainless steel grades', 'Aluminium profiles', 'Structural steel'],
  },
  {
    Icon: Wrench,
    name: 'Industrial Services',
    desc: 'Plant & equipment',
    detail: 'Providing plant closedown services, asset disposal, and industrial scrap collection from large facilities.',
    needs: ['Plant machinery scrap', 'Surplus equipment', 'Steel structures', 'Mixed industrial scrap'],
  },
  {
    Icon: Car,
    name: 'Automotive',
    desc: 'End-of-life vehicles',
    detail: 'Sourcing automotive scrap and ELV components from automotive dismantlers and metal processors.',
    needs: ['ELV metal scrap', 'Catalytic converters', 'Aluminium auto parts', 'Cast iron scrap'],
  },
];

export function IndustriesPage() {
  return (
    <div style={{ backgroundColor: '#F5F7FA' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0B1F3A 0%, #1F4E79 100%)' }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37', filter: 'blur(70px)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Sectors We Serve
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Industries We Serve
            </h1>
            <p
              className="text-gray-300 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Velnexa works with diverse industries that produce or need bulk ferrous and non-ferrous metals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {industries.map(({ Icon, name, desc, detail, needs }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ border: '1px solid rgba(11,31,58,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(11,31,58,0.07)' }}
                >
                  <Icon size={23} style={{ color: '#1F4E79' }} />
                </div>
                <h3
                  className="mb-0.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.125rem', fontWeight: 800 }}
                >
                  {name}
                </h3>
                <div
                  className="mb-3"
                  style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600 }}
                >
                  {desc}
                </div>
                <p
                  className="mb-5"
                  style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.7 }}
                >
                  {detail}
                </p>
                <div style={{ borderTop: '1px solid rgba(11,31,58,0.07)', paddingTop: '1rem' }}>
                  <div style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                    Common needs:
                  </div>
                  <ul className="space-y-1">
                    {needs.map((need, j) => (
                      <li key={j} className="flex items-center gap-2" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + CTA */}
      <section className="py-20" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(212,175,55,0.15)', height: '300px' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=600&fit=crop&auto=format"
                alt="Aerial view of shipping container yard for international metal trade logistics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-white mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800 }}
              >
                Your Industry, Our Network
              </h2>
              <p
                className="mb-8"
                style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.75 }}
              >
                Whether you're a manufacturer needing consistent raw material supply or a metal processor looking for quality feed material, Velnexa's network can serve your exact requirements at scale.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md transition-all hover:brightness-110 hover:-translate-y-0.5"
                style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
              >
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
