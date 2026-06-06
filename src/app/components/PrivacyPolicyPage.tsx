import { motion } from 'motion/react';

const sections = [
  {
    title: 'Information We Collect',
    type: 'list',
    intro: 'We may collect the following information when you interact with our website:',
    items: [
      'Name',
      'Company Name',
      'Phone Number',
      'Email Address',
      'Location',
      'Material Requirements',
      'Business Enquiry Details',
      'Any information voluntarily submitted through our forms',
    ],
  },
  {
    title: 'How We Use Your Information',
    type: 'list',
    intro: 'The information collected may be used to:',
    items: [
      'Respond to enquiries and requests',
      'Provide quotations and business proposals',
      'Facilitate sourcing and trading opportunities',
      'Improve our services and website experience',
      'Communicate regarding ongoing business discussions',
      'Maintain internal records',
    ],
  },
  {
    title: 'Information Sharing',
    type: 'mixed',
    intro: 'Velnexa Group does not sell, rent, or trade your personal information to third parties.',
    subIntro: 'Information may be shared only when necessary to:',
    items: [
      'Fulfil a business requirement',
      'Connect buyers and suppliers',
      'Comply with applicable legal obligations',
      'Protect the rights and interests of Velnexa Group',
    ],
  },
  {
    title: 'Data Security',
    type: 'text',
    body: 'We implement reasonable administrative and technical measures to safeguard information submitted through our website. However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Third-Party Services',
    type: 'list',
    intro: 'Our website may use third-party tools and services including:',
    items: [
      'Google Analytics',
      'Web3Forms',
      'WhatsApp Business',
      'Hosting and cloud infrastructure providers',
    ],
    outro: 'These services may process information in accordance with their own privacy policies.',
  },
  {
    title: 'Cookies',
    type: 'text',
    body: 'Our website may use cookies and similar technologies to improve user experience, analyze website performance, and enhance functionality.',
  },
  {
    title: 'External Links',
    type: 'text',
    body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.',
  },
  {
    title: 'Your Rights',
    type: 'list',
    intro: 'You may contact us at any time to:',
    items: [
      'Request access to your information',
      'Request correction of information',
      'Request deletion of information where applicable',
    ],
  },
  {
    title: 'Policy Updates',
    type: 'text',
    body: 'Velnexa Group reserves the right to update this Privacy Policy at any time. Updated versions will be posted on this page.',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay },
});

export function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#F5F7FA' }}>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #0B1F3A 0%, #1F4E79 100%)' }}
      >
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37', filter: 'blur(70px)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Legal
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro paragraph */}
          <motion.p {...fadeUp(0)} className="mb-12" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85 }}>
            At <strong style={{ color: '#0B1F3A' }}>Velnexa Group, a unit of Swastikahy Esolutions Pvt Ltd</strong>, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us through our forms and communication channels.
          </motion.p>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.05)}
                className="bg-white rounded-2xl p-8"
                style={{ border: '1px solid rgba(11,31,58,0.07)', boxShadow: '0 2px 12px rgba(11,31,58,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.0625rem', fontWeight: 700 }}>
                    {s.title}
                  </h2>
                </div>

                {s.type === 'text' && (
                  <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                    {s.body}
                  </p>
                )}

                {s.type === 'list' && (
                  <>
                    {s.intro && (
                      <p className="mb-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.intro}
                      </p>
                    )}
                    <ul className="space-y-2 mb-0">
                      {s.items!.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                          <span style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {s.outro && (
                      <p className="mt-4" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.outro}
                      </p>
                    )}
                  </>
                )}

                {s.type === 'mixed' && (
                  <>
                    <p className="mb-4" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                      {s.intro}
                    </p>
                    <p className="mb-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                      {s.subIntro}
                    </p>
                    <ul className="space-y-2">
                      {s.items!.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#D4AF37' }} />
                          <span style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div {...fadeUp(0.3)} className="mt-10 p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #0B1F3A, #1F4E79)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <p style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Contact Information
            </p>
            <p className="mb-3" style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              For privacy-related enquiries, please contact Velnexa Group — a unit of Swastikahy Esolutions Pvt Ltd:
            </p>
            <a href="mailto:sales@velnexagroup.com" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none' }}>
              sales@velnexagroup.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
