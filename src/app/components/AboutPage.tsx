import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Target, Eye, Globe, Users, ShieldCheck, BarChart2, CheckCircle, Handshake } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  { Icon: Target, title: 'Mission', desc: 'To simplify metal sourcing and trading through trusted relationships, transparent processes, and dependable execution.' },
  { Icon: Eye, title: 'Vision', desc: 'To become one of the most trusted metal trading and sourcing networks connecting buyers and suppliers across global markets.' },
  { Icon: Globe, title: 'Global Reach', desc: 'Supporting domestic and international trade opportunities through growing supplier, buyer, and logistics networks.' },
  { Icon: Users, title: 'Network', desc: 'A strong ecosystem of manufacturers, traders, processors, suppliers, recyclers, and industrial consumers built on trust and long-term collaboration.' },
];


export function AboutPage() {
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
              About Velnexa Group
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              5+ Years of Experience in<br />Metal Trading & Global Sourcing
            </h1>
            <p
              className="text-gray-300 max-w-2xl mb-4"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.8 }}
            >
              Connecting buyers, suppliers, traders, and industrial consumers through trusted metal sourcing, transparent transactions, and reliable execution.
            </p>
            <p
              className="text-gray-400 max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}
            >
              Velnexa Group is a modern metal trading and sourcing network specializing in ferrous and non-ferrous metals. Built on years of industry experience and strong market relationships, we help businesses source, trade, and move metals efficiently across domestic and international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview & Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

            {/* Left — Overlapping Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative"
              style={{ minHeight: '480px' }}
            >
              {/* Back image */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ top: '40px', left: '30px', right: 0, bottom: 0, border: '1px solid rgba(11,31,58,0.08)' }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=700&h=500&fit=crop&auto=format"
                  alt="Steel coils stacked in an industrial metal warehouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(11,31,58,0.3) 100%)' }} />
              </div>

              {/* Front image */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ top: 0, left: 0, width: '72%', height: '62%', border: '3px solid #fff', zIndex: 2 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format"
                  alt="Business professionals sealing a metal trade deal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent corner */}
              <div
                className="absolute rounded-xl z-10"
                style={{ bottom: '24px', left: '10px', width: '56px', height: '56px', background: 'linear-gradient(135deg, #D4AF37, #F0C040)', opacity: 0.18 }}
              />
            </motion.div>

            {/* Right — Content */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full mb-1"
                  style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: '#B8940F', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  About Velnexa Group
                </span>
                <div className="mt-3 mb-5" style={{ height: '2px', width: '48px', background: 'linear-gradient(90deg, #D4AF37, #F0C040)', borderRadius: '2px' }} />

                <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', fontWeight: 800, lineHeight: 1.2 }}>
                  Driving Growth Through Trusted<br />Metal Trade
                </h2>

                <p className="mt-3" style={{ fontFamily: 'Inter, sans-serif', color: '#1F4E79', fontSize: '0.9375rem', fontWeight: 600, lineHeight: 1.6 }}>
                  Connecting Buyers, Suppliers, Traders, and Industries Through Reliable Metal Sourcing & Trade Execution
                </p>
              </motion.div>

              {/* Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
                style={{ color: '#3D5470', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}
              >
                <p>
                  Velnexa Group is a modern metal trading and sourcing network focused on connecting buyers, suppliers, manufacturers, and industrial consumers across domestic and international markets.
                </p>
                <p>
                  With over 5 years of industry experience, we have built strong relationships across the metal value chain, enabling efficient procurement, transparent transactions, and dependable supply solutions.
                </p>
                <p>
                  Our expertise spans Copper, Aluminium, Brass, Steel, Zinc, and other industrial metals. Through a growing network of suppliers, processors, traders, and industrial partners, we help businesses source materials efficiently and create long-term value across the supply chain.
                </p>
                <p>
                  At Velnexa Group, we believe successful trade is built on trust, transparency, and lasting partnerships. Our objective is to simplify metal sourcing and trading while delivering consistent value to buyers, suppliers, and industrial stakeholders.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 14px 30px rgba(212,175,55,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #F0C040)', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
                  >
                    Explore our Network <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: '1px solid rgba(11,31,58,0.07)', height: '400px' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1485717176797-ee010b5cd338?w=800&h=600&fit=crop&auto=format"
                alt="Colorful cargo containers representing Velnexa's global trade network"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: '#B8940F', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Our Story
              </span>
              <h2
                className="mb-5"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', fontWeight: 800 }}
              >
                A Network Built on Trust
              </h2>
              <div style={{ color: '#3D5470', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                <p className="mb-4">
                  Velnexa Group was built on a simple belief: successful trade begins with trusted relationships.
                </p>
                <p className="mb-4">
                  Over the years, we have worked closely with suppliers, traders, processors, manufacturers, and industrial buyers across the metal value chain. These relationships have helped us develop a reliable network capable of supporting sourcing, procurement, and trade requirements across multiple markets.
                </p>
                <p className="mb-4">
                  What started as focused participation in domestic metal trade has evolved into a growing network supporting ferrous and non-ferrous metals, import-export opportunities, and industrial supply requirements.
                </p>
                <p>
                  Today, Velnexa Group continues to expand its reach by connecting businesses with the right materials, the right partners, and the right opportunities—creating value through transparency, reliability, and long-term partnerships.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Velnexa */}
      <section className="py-24" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: '#B8940F', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Why Velnexa
            </span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: 'clamp(1.6rem, 3vw, 2.375rem)', fontWeight: 800 }}>
              Why Businesses Choose Velnexa
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#5C7190', fontSize: '0.9375rem', lineHeight: 1.8 }}>
              We combine market expertise, trusted relationships, and operational reliability to help businesses trade metals with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: ShieldCheck, title: 'Trusted Network', desc: 'Access to verified buyers, suppliers, and trade partners across the metal value chain.' },
              { Icon: BarChart2, title: 'Market Expertise', desc: 'Industry knowledge backed by years of practical trading and sourcing experience.' },
              { Icon: CheckCircle, title: 'Transparent Transactions', desc: 'Clear communication, fair pricing, and dependable execution at every stage.' },
              { Icon: Handshake, title: 'Long-Term Partnerships', desc: 'Focused on building sustainable business relationships rather than one-time transactions.' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 group"
                style={{ border: '1px solid rgba(11,31,58,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                >
                  <Icon size={22} style={{ color: '#D4AF37' }} />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1rem', fontWeight: 700, marginBottom: '0.625rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', color: '#5C7190', fontSize: '0.875rem', lineHeight: 1.75 }}>
                  {desc}
                </p>
                <div className="mt-5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-14" style={{ backgroundColor: '#D4AF37' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              className="text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800 }}
            >
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.12)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(212,175,55,0.12)' }}
                >
                  <Icon size={20} style={{ color: '#D4AF37' }} />
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {title}
                </h3>
                <p style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1F4E79 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800 }}
            >
              Partner With Velnexa
            </h2>
            <p
              className="text-gray-300 mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75 }}
            >
              Whether you're looking to source metals, expand your supplier network, or explore new trade opportunities, Velnexa Group is ready to support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ y: -3, boxShadow: '0 14px 30px rgba(212,175,55,0.45)' }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/buy"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F0C040)', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
                >
                  Source Metals <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div className="group" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/sell"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0B1F3A]"
                  style={{ border: '2px solid rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
                >
                  Sell Metals <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
