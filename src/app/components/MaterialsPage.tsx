import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const materials = [
  {
    name: 'Copper',
    tag: 'Electrical / Industrial',
    desc: 'Copper scrap, copper wire, copper cathodes.',
    detail: 'Used in electrical, construction, and industrial manufacturing. Available in multiple grades including bare bright, #1 copper, #2 copper, and mixed copper.',
    image: 'https://images.unsplash.com/photo-1714352069805-e0bf94d1381f?w=700&h=420&fit=crop&auto=format',
    alt: 'Close-up of copper electrical cables and wires',
    grade: 'Multiple grades',
  },
  {
    name: 'Aluminium',
    tag: 'Construction / Industrial',
    desc: 'Aluminium scrap, sheets, and extrusions.',
    detail: 'Lightweight and widely used across industries. We handle aluminium in all forms — UBC, cast, extrusions, and mixed aluminium scrap.',
    image: 'https://images.unsplash.com/photo-1516297702292-c919b6adea0c?w=700&h=420&fit=crop&auto=format',
    alt: 'Aluminium metal foil and scrap materials',
    grade: 'Various alloys',
  },
  {
    name: 'Iron & Steel',
    tag: 'Construction / Heavy Industry',
    desc: 'Ferrous scrap, HMS, structural steel.',
    detail: 'Used in construction and heavy industries. We source HMS 1 & 2, shredded steel, plate and structural steel, and busheling.',
    image: 'https://images.unsplash.com/photo-1628097045676-97212b505372?w=700&h=420&fit=crop&auto=format',
    alt: 'Industrial steel containers and structural metal',
    grade: 'HMS 1 & 2 / Shredded',
  },
  {
    name: 'Brass',
    tag: 'Electrical / Industrial',
    desc: 'Brass scrap, brass rods, and brass turnings.',
    detail: 'A copper-zinc alloy widely used in electrical fittings, valves, and industrial components. Available in honey brass, clean brass, and mixed brass grades.',
    image: 'https://images.unsplash.com/photo-1718752773179-34c02d4dda5f?w=700&h=420&fit=crop&auto=format',
    alt: 'Metal ingots and brass industrial material',
    grade: 'Honey / Clean / Mixed',
  },
  {
    name: 'Zinc',
    tag: 'Industrial / Manufacturing',
    desc: 'Zinc scrap, zinc dross, and zinc alloys.',
    detail: 'Used in galvanising, die casting, and alloy production. We source zinc in various forms including die cast scrap, rolled zinc, and zinc dross from manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1697698532602-ccf880036281?w=700&h=420&fit=crop&auto=format',
    alt: 'Industrial metal rolls and steel warehouse',
    grade: 'Die cast / Rolled / Dross',
  },
  {
    name: 'Lead',
    tag: 'Industrial / Construction',
    desc: 'Lead scrap, lead pipes, and lead sheets.',
    detail: 'Sourced from industrial, construction, and manufacturing sectors. We handle soft lead, hard lead, and lead alloy scrap in bulk quantities.',
    image: 'https://images.unsplash.com/photo-1633769572945-936be251644b?w=700&h=420&fit=crop&auto=format',
    alt: 'Metal bars and industrial lead material',
    grade: 'Soft / Hard / Alloy',
  },
  {
    name: 'Stainless Steel',
    tag: 'Construction / Industrial',
    desc: 'Stainless steel scrap, coils, and grades.',
    detail: 'High-demand material across food processing, pharmaceutical, and construction industries. We source 304, 316, and other SS grades in turnings, solids, and coil form.',
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?w=700&h=420&fit=crop&auto=format',
    alt: 'Stainless steel coils in industrial warehouse',
    grade: '304 / 316 / Mixed',
  },
];

export function MaterialsPage() {
  return (
    <div style={{ backgroundColor: '#F5F7FA' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0B1F3A 0%, #1F4E79 100%)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Commodities
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Materials &amp; Commodities
            </h1>
            <p
              className="text-gray-300 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              We deal in a wide range of ferrous and non-ferrous metals, enabling bulk trade and efficient sourcing across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materials.map((mat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 group"
                style={{ border: '1px solid rgba(11,31,58,0.06)' }}
              >
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <ImageWithFallback
                    src={mat.image}
                    alt={mat.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.25rem', fontWeight: 800 }}>
                      {mat.name}
                    </h3>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs flex-shrink-0"
                        style={{ backgroundColor: 'rgba(31,78,121,0.09)', color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                      >
                        {mat.tag}
                      </span>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs flex-shrink-0"
                        style={{ backgroundColor: 'rgba(212,175,55,0.12)', color: '#9A7A0A', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                      >
                        {mat.grade}
                      </span>
                    </div>
                  </div>
                  <p
                    className="mb-1"
                    style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 500 }}
                  >
                    {mat.desc}
                  </p>
                  <p
                    className="mb-6"
                    style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.7 }}
                  >
                    {mat.detail}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ backgroundColor: '#0B1F3A', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 700 }}
                  >
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #1F4E79 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800 }}
            >
              Ready to Source or Trade Materials?
            </h2>
            <p
              className="text-gray-300 mb-8"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}
            >
              Connect with our team to get pricing and availability for your requirements.
            </p>
            <Link
              to="/buy"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#D4AF37', color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '0.9375rem' }}
            >
              Get Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
