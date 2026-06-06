import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers,
  Package,
  Wrench,
  Factory,
  Building2,
  Zap,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65 },
};


const whatWeDo = [
  {
    Icon: Layers,
    title: 'Bulk Metal Trading',
    desc: 'We facilitate large-scale buying and selling of metals including copper, aluminium, and steel through a reliable sourcing network.',
  },
  {
    Icon: Package,
    title: 'Industrial Metal Procurement',
    desc: 'We connect industries with verified metal processors and traders, ensuring efficient procurement and value realization.',
  },
  {
    Icon: Globe,
    title: 'Global Import & Export',
    desc: 'Our network enables seamless cross-border trade with logistics support, compliance handling, and optimized sourcing.',
  },
];

const materials = [
  { icon: '⚡', name: 'Copper', desc: 'Wire, scrap & cathodes' },
  { icon: '🔩', name: 'Aluminium', desc: 'Sheets, scrap & extrusions' },
  { icon: '⚙️', name: 'Iron & Steel', desc: 'Ferrous scrap & HMS' },
  { icon: '🔶', name: 'Brass', desc: 'Rods, scrap & turnings' },
  { icon: '🪙', name: 'Zinc', desc: 'Dross, die cast & rolled' },
  { icon: '⚫', name: 'Lead', desc: 'Soft, hard & alloy scrap' },
  { icon: '🔧', name: 'Stainless Steel', desc: '304, 316 & mixed grades' },
];

const whyVelnexa = [
  'Strong network of verified suppliers and buyers',
  'Bulk handling capability across materials',
  'Transparent pricing and efficient deal execution',
  'Pan-India sourcing with global trade capabilities',
  'Reliable logistics and timely delivery',
];

const howItWorks = [
  { step: '01', title: 'Share Your Requirement', desc: 'Submit details of materials you want to buy or sell.' },
  { step: '02', title: 'Get Best Match & Pricing', desc: 'We connect you with the right network and pricing.' },
  { step: '03', title: 'Execute Seamlessly', desc: 'Smooth transaction with logistics and support handled.' },
];

const industries = [
  { Icon: Factory, name: 'Manufacturing', desc: 'Raw material sourcing' },
  { Icon: Building2, name: 'Construction', desc: 'Structural metals' },
  { Icon: Zap, name: 'Electrical', desc: 'Copper & cables' },
  { Icon: Wrench, name: 'Engineering', desc: 'Metal fabrication' },
];

export function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1485717176797-ee010b5cd338?w=1920&h=1080&fit=crop&auto=format"
            alt="Colorful industrial cargo containers at a global trade port"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(130deg, rgba(11,31,58,0.93) 0%, rgba(31,78,121,0.72) 60%, rgba(11,31,58,0.85) 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
              Global Metal Trade Network
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.1rem, 5.5vw, 3.875rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em' }}
            >
              Powering Bulk{' '}
              <span style={{ color: '#D4AF37' }}>Metal Trade</span>{' '}
              Through a Trusted Global Network
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-10 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Seamlessly connect with reliable buyers and suppliers across markets. From sourcing to execution, Velnexa enables efficient, transparent, and scalable trade in ferrous and non-ferrous metals.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary — Source Metals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                whileHover={{ y: -3, boxShadow: '0 16px 35px rgba(212,175,55,0.45)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/buy"
                  className="flex items-center justify-center w-full sm:w-auto px-8 py-4 transition-all duration-300"
                  style={{ backgroundColor: '#D4AF37', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, borderRadius: '12px', boxShadow: '0 4px 18px rgba(212,175,55,0.3)' }}
                >
                  Source Metals <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </Link>
              </motion.div>

              {/* Secondary — Sell Metals */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/sell"
                  className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0B1F3A]"
                  style={{ border: '2px solid rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, borderRadius: '12px' }}
                >
                  Sell Metals <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-white/25 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </div>
      </section>


      {/* ── WHAT WE DO ── */}
      <section className="py-24" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="text-center mb-16">
            <span
              className="inline-block px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: '#B8940F', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Our Services
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}>
              What We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {whatWeDo.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ border: '1px solid rgba(11,31,58,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))' }}
                >
                  <Icon size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.125rem', fontWeight: 700 }}
                >
                  {title}
                </h3>
                <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="text-center mb-16">
            <span
              className="inline-block px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(31,78,121,0.08)', color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Commodities
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}>
              Materials We Deal In
            </h2>
            <p className="mt-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
              Available in multiple grades and forms based on industrial requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {materials.map((mat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="relative group overflow-hidden rounded-xl p-6 text-center cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
                style={{ backgroundColor: '#F5F7FA', border: '1px solid rgba(11,31,58,0.07)' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(150deg, #0B1F3A 0%, #1F4E79 100%)' }} />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{mat.icon}</div>
                  <div
                    className="transition-colors duration-300 text-[#0B1F3A] group-hover:text-white"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: 700 }}
                  >
                    {mat.name}
                  </div>
                  <div
                    className="mt-1 transition-colors duration-300 text-[#5C7190] group-hover:text-gray-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
                  >
                    {mat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/materials"
              className="inline-flex items-center gap-1.5 hover:gap-3 transition-all"
              style={{ color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600 }}
            >
              View All Materials <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY VELNEXA ── */}
      <section className="py-24" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Why Choose Us
              </span>
              <h2
                className="text-white mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}
              >
                Why Velnexa
              </h2>

              <ul className="space-y-4">
                {whyVelnexa.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={19} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                    <span style={{ color: '#C5D6EB', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md transition-all hover:brightness-110 hover:-translate-y-0.5"
                  style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700 }}
                >
                  Get Started <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(212,175,55,0.18)' }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718314740490-1463a6152cdd?w=800&h=560&fit=crop&auto=format"
                  alt="Large cargo ship for global metal trade and logistics"
                  className="w-full object-cover"
                  style={{ height: '340px' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,31,58,0.5) 0%, transparent 60%)' }} />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="text-center mb-16">
            <span
              className="inline-block px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: '#B8940F', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Process
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}>
              How It Works
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-10 left-[calc(33%+40px)] right-[calc(33%+40px)] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), rgba(212,175,55,0.4), transparent)' }}
            />

            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: '#0B1F3A', border: '2.5px solid #D4AF37', boxShadow: '0 0 0 6px rgba(212,175,55,0.08)' }}
                >
                  <span style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.25rem' }}>
                    {step.step}
                  </span>
                </div>
                <h3
                  className="mb-2.5"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.0625rem', fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="text-center mb-14">
            <span
              className="inline-block px-3 py-1 rounded-full mb-3"
              style={{ backgroundColor: 'rgba(31,78,121,0.08)', color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Sectors
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}>
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map(({ Icon, name, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                style={{ backgroundColor: '#F5F7FA', border: '1px solid rgba(11,31,58,0.06)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(11,31,58,0.07)' }}
                >
                  <Icon size={26} style={{ color: '#1F4E79' }} />
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontWeight: 700, fontSize: '0.9375rem' }}>
                  {name}
                </div>
                <div className="mt-1" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
                  {desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1F4E79 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.07]" style={{ backgroundColor: '#D4AF37', filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.05]" style={{ backgroundColor: '#D4AF37', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }} />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div {...reveal}>
            <h2
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.625rem)', fontWeight: 900, lineHeight: 1.15 }}
            >
              Looking to Buy or Sell in Bulk?
            </h2>
            <p
              className="text-gray-300 mb-10"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.7 }}
            >
              Get connected to the right network and execute deals efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/buy"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all hover:brightness-110 hover:-translate-y-0.5"
                style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
              >
                Get Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.35)', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9375rem' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
