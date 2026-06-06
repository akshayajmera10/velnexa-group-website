import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Globe, FileText, Truck, Network, ArrowRight, CheckCircle2, Ship } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    Icon: Network,
    title: 'International Supplier Network',
    desc: 'Access to vetted suppliers and buyers spanning multiple continents. Our network covers major metal trading hubs globally.',
  },
  {
    Icon: Globe,
    title: 'Import / Export Handling',
    desc: 'End-to-end management of cross-border trade operations, from origin inspection to final delivery at destination.',
  },
  {
    Icon: FileText,
    title: 'Documentation & Compliance',
    desc: 'Complete documentation support — BL, packing lists, certificates of origin, quality certificates, and customs compliance.',
  },
  {
    Icon: Truck,
    title: 'Logistics Support',
    desc: 'Coordinated freight forwarding, container booking, port handling, and last-mile delivery support.',
  },
];

const tradeRoutes = [
  { from: 'Middle East', to: 'India', material: 'Copper & Aluminium Scrap' },
  { from: 'Europe', to: 'India', material: 'HMS Steel' },
  { from: 'South Asia', to: 'India', material: 'Non-Ferrous Metals' },
  { from: 'Southeast Asia', to: 'India', material: 'Cable Scrap' },
];

export function ImportExportPage() {
  return (
    <div style={{ backgroundColor: '#F5F7FA' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-0 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0B1F3A 0%, #1F4E79 100%)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37', filter: 'blur(70px)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="pb-16">
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Cross-Border Trade
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Global Trade &amp; Sourcing
            </h1>
            <p
              className="text-gray-300 max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Velnexa supports cross-border trade with logistics coordination, compliance handling, and efficient sourcing across international markets.
            </p>
          </motion.div>

          {/* Ship image strip */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1718314786551-798f1398a7b1?w=1600&h=400&fit=crop&auto=format"
              alt="Cargo ship for global metal trade logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,31,58,0.8) 0%, transparent 50%, rgba(11,31,58,0.4) 100%)' }} />
            <div className="absolute inset-0 flex items-center px-8">
              <div>
                <div style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  VELNEXA GLOBAL
                </div>
                <div className="text-white mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 800 }}>
                  15+ Countries. One Network.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl p-7 flex gap-5 shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ border: '1px solid rgba(11,31,58,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))' }}
                >
                  <Icon size={22} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <h3 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.0625rem', fontWeight: 700 }}>
                    {title}
                  </h3>
                  <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Routes */}
      <section className="py-16" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2
              className="text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800 }}
            >
              Active Trade Routes
            </h2>
            <p style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', marginTop: '6px' }}>
              Examples of trade corridors we actively operate in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tradeRoutes.map((route, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <Ship size={20} style={{ color: '#D4AF37', marginBottom: '10px' }} />
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.875rem' }}>{route.from}</span>
                  <span style={{ color: '#D4AF37' }}>→</span>
                  <span style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.875rem' }}>{route.to}</span>
                </div>
                <div style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
                  {route.material}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance + CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800 }}
              >
                What We Handle for You
              </h2>
              {[
                'Port of origin handling and pre-shipment inspection',
                'Freight forwarding and container booking',
                'Export clearance and customs documentation',
                'Quality certificates and material grading',
                'Insurance and risk management',
                'Destination port handling and delivery',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-4">
                  <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                  <span style={{ color: '#3D5470', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, #0B1F3A, #1F4E79)', border: '1px solid rgba(212,175,55,0.15)' }}
            >
              <div style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Get Started Today
              </div>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}
              >
                Ready to Trade Across Borders?
              </h3>
              <p style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Share your requirement and our global trade team will connect you with the right partners.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md transition-all hover:brightness-110"
                style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}
              >
                Contact Us <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
