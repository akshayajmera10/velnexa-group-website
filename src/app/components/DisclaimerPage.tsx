import { motion } from 'motion/react';

const sections = [
  {
    title: 'Business Information',
    type: 'text',
    body: 'Any material specifications, product descriptions, sourcing information, market insights, or other content provided on this website is intended solely for general business reference and should not be considered a binding offer, commitment, or guarantee.',
  },
  {
    title: 'Quotations and Pricing',
    type: 'list',
    intro: 'All quotations, pricing, availability, and commercial terms are subject to market conditions, supplier availability, verification, and separate commercial discussions.',
    subIntro: 'Submission of an enquiry through this website does not guarantee:',
    items: [
      'Product availability',
      'Price confirmation',
      'Acceptance of an order',
      'Completion of a transaction',
      'Formation of a business relationship',
    ],
  },
  {
    title: 'Transactions',
    type: 'text',
    body: 'Any business transaction conducted between parties introduced through Velnexa Group remains subject to independent evaluation, negotiation, contractual agreements, and due diligence by all involved parties. Velnexa Group shall not be responsible for any commercial losses, disputes, delays, pricing fluctuations, quality variations, or transaction-related issues arising from agreements between buyers, suppliers, traders, logistics providers, or third parties.',
  },
  {
    title: 'External Links',
    type: 'text',
    body: 'This website may contain links to external websites, platforms, or third-party services. Velnexa Group does not control and is not responsible for the content, policies, availability, or practices of such external resources.',
  },
  {
    title: 'Website Availability',
    type: 'text',
    body: 'While reasonable efforts are made to maintain uninterrupted website access, Velnexa Group does not guarantee that the website will always be available, error-free, secure, or free from technical interruptions.',
  },
  {
    title: 'Limitation of Liability',
    type: 'text',
    body: 'Under no circumstances shall Velnexa Group be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website or reliance on any information provided herein.',
  },
  {
    title: 'Intellectual Property',
    type: 'text',
    body: 'All content, branding, logos, graphics, text, and website materials are the property of Velnexa Group unless otherwise stated and may not be copied, reproduced, distributed, or used without prior written permission.',
  },
  {
    title: 'Changes to This Disclaimer',
    type: 'text',
    body: 'Velnexa Group reserves the right to modify or update this Disclaimer at any time without prior notice. Continued use of the website constitutes acceptance of any revisions.',
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay },
});

export function DisclaimerPage() {
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
              Disclaimer
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
            The information provided on the <strong style={{ color: '#0B1F3A' }}>Velnexa Group</strong> website is for general informational and business purposes only. While we strive to ensure that all information is accurate and up to date, Velnexa Group makes no representations or warranties of any kind regarding the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
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
                      <p className="mb-4" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.intro}
                      </p>
                    )}
                    {s.subIntro && (
                      <p className="mb-3" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.8 }}>
                        {s.subIntro}
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
            <p className="mb-4" style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              For any questions regarding this Disclaimer, please contact Velnexa Group:
            </p>
            <a
              href="mailto:sales@velnexagroup.com"
              className="flex items-center gap-2 mb-2 hover:text-white transition-colors"
              style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none' }}
            >
              sales@velnexagroup.com
            </a>
            <a
              href="tel:+919220641177"
              className="flex items-center gap-2 hover:text-white transition-colors"
              style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none' }}
            >
              +91 92206 41177
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
