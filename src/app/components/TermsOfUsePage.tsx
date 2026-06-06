import { motion } from 'motion/react';

const sections = [
  {
    title: 'Acceptance of Terms',
    type: 'mixed',
    intro: 'By using this website, you acknowledge that you have read, understood, and agreed to these Terms of Use.',
    outro: 'If you do not agree with these terms, please discontinue use of the website.',
  },
  {
    title: 'Website Purpose',
    type: 'list',
    intro: 'This website is intended to provide information regarding:',
    items: [
      'Metal sourcing',
      'Metal trading',
      'Procurement services',
      'Import and export activities',
      'Business enquiries and partnerships',
    ],
    outro: 'The information provided is for general business and informational purposes only.',
  },
  {
    title: 'No Guarantee of Transactions',
    type: 'list',
    intro: 'Submission of enquiries, quotations, requests, or business information through the website does not guarantee:',
    items: [
      'Acceptance of an order',
      'Availability of materials',
      'Completion of a transaction',
      'Formation of a business relationship',
    ],
    outro: 'All transactions remain subject to separate commercial discussions and agreements.',
  },
  {
    title: 'User Responsibilities',
    type: 'list',
    intro: 'Users agree:',
    items: [
      'To provide accurate information',
      'Not to submit false or misleading enquiries',
      'Not to misuse the website',
      'Not to interfere with website operations',
      'Not to engage in unlawful activities through the website',
    ],
  },
  {
    title: 'Intellectual Property',
    type: 'list',
    intro: 'All content on this website, including:',
    items: [
      'Logos',
      'Text',
      'Graphics',
      'Designs',
      'Branding',
      'Images',
    ],
    outro: 'is the property of Velnexa Group unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.',
  },
  {
    title: 'Limitation of Liability',
    type: 'list',
    intro: 'Velnexa Group shall not be liable for any direct, indirect, incidental, or consequential losses arising from:',
    items: [
      'Use of the website',
      'Reliance on website information',
      'Service interruptions',
      'Technical errors',
      'Third-party actions',
    ],
  },
  {
    title: 'Third-Party Links',
    type: 'text',
    body: 'The website may contain links to external websites for convenience. Velnexa Group does not endorse or assume responsibility for third-party content or services.',
  },
  {
    title: 'Changes to Website',
    type: 'text',
    body: 'Velnexa Group reserves the right to modify, suspend, or discontinue any part of the website without prior notice.',
  },
  {
    title: 'Governing Law',
    type: 'text',
    body: 'These Terms of Use shall be governed by and interpreted in accordance with the laws of India.',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay },
});

export function TermsOfUsePage() {
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
              Terms of Use
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
          {/* Intro */}
          <motion.p {...fadeUp(0)} className="mb-12" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.85 }}>
            Welcome to <strong style={{ color: '#0B1F3A' }}>Velnexa Group</strong>. By accessing and using this website, you agree to comply with the following Terms of Use.
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

                {s.type === 'mixed' && (
                  <>
                    <p className="mb-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                      {s.intro}
                    </p>
                    {s.outro && (
                      <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.outro}
                      </p>
                    )}
                  </>
                )}

                {s.type === 'list' && (
                  <>
                    {s.intro && (
                      <p className="mb-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.intro}
                      </p>
                    )}
                    <ul className="space-y-2">
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
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div {...fadeUp(0.3)} className="mt-10 p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #0B1F3A, #1F4E79)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <p style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Contact Information
            </p>
            <p className="mb-3" style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              For any questions regarding these Terms of Use, please contact Velnexa Group:
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
