import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { trackEvent } from '../lib/analytics';
import { CheckCircle2, Mail, Phone, MessageCircle, ArrowRight, MapPin, Linkedin } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const WEB3FORMS_KEY = '19c45fc3-669a-4503-9012-0797a7294eaf'; // Replace with your key from web3forms.com

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmitError(false);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: 'New Contact Enquiry - Velnexa Group',
        from_name: data.name,
        Name: data.name,
        Phone: data.phone,
        Email: data.email,
        'Enquiry Subject': data.subject || '—',
        Message: data.message,
        'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent('form_submit', { form_name: 'contact_form' });
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        setSubmitError(true);
      }
    } catch (_err) {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (hasError: boolean) => ({
    backgroundColor: '#F5F7FA',
    border: `1.5px solid ${hasError ? '#ef4444' : 'rgba(11,31,58,0.14)'}`,
    color: '#0B1F3A',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9rem',
    borderRadius: '0.5rem',
    width: '100%',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.15s',
  });

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
              Contact Us
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Get in Touch
            </h1>
            <p
              className="text-gray-300 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Reach out to us for enquiries, sourcing, or partnerships. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2
                  className="mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.5rem', fontWeight: 800 }}
                >
                  Contact Details
                </h2>
                <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                  Multiple ways to reach the Velnexa team.
                </p>
              </div>

              {/* Cards */}
              {[
                {
                  Icon: Mail,
                  label: 'Email Us',
                  value: 'sales@velnexagroup.com',
                  href: 'mailto:sales@velnexagroup.com',
                  note: 'For general enquiries and RFQs',
                },
                {
                  Icon: Phone,
                  label: 'Call Us',
                  value: '+91 92206 41177',
                  href: 'tel:+919220641177',
                  note: 'Mon–Sat, 9 AM – 7 PM IST',
                },
                {
                  Icon: MessageCircle,
                  label: 'WhatsApp',
                  value: 'Chat Now',
                  href: 'https://wa.me/919220641177',
                  note: 'Quick responses via WhatsApp',
                },
                {
                  Icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'Velnexa Group',
                  href: 'https://www.linkedin.com/company/velnexa-group',
                  note: 'Connect & follow us on LinkedIn',
                },
              ].map(({ Icon, label, value, href, note }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all group"
                  style={{ border: '1px solid rgba(11,31,58,0.07)', textDecoration: 'none' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                  >
                    <Icon size={18} style={{ color: '#D4AF37' }} />
                  </div>
                  <div>
                    <div style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '2px' }}>
                      {label}
                    </div>
                    <div style={{ color: '#0B1F3A', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700 }}>
                      {value}
                    </div>
                    <div style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', marginTop: '2px' }}>
                      {note}
                    </div>
                  </div>
                </a>
              ))}

              {/* HQ Badge */}
              <div
                className="p-5 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #0B1F3A, #1F4E79)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} style={{ color: '#D4AF37' }} />
                  <div style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    CORPORATE ADDRESS
                  </div>
                </div>
                <div style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 700 }}>
                  Velnexa Group
                </div>
                <div style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', marginTop: '4px', lineHeight: 1.7 }}>
                  Innov8, 9th Floor, Tower D,<br />
                  Unitech Cyber Park, Sector 39,<br />
                  Gurugram, Haryana, India – 122001
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm"
              style={{ border: '1px solid rgba(11,31,58,0.07)' }}
            >
              <h2
                className="mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.5rem', fontWeight: 800 }}
              >
                Send a Message
              </h2>
              <p className="mb-7" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                Fill in the form and we'll get back to you within one business day.
              </p>

              {submitted && (
                <div
                  className="mb-6 p-4 rounded-xl flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
                >
                  <CheckCircle2 size={20} style={{ color: '#16A34A', flexShrink: 0 }} />
                  <span style={{ color: '#15803d', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                    Thank you for your enquiry. Our team will contact you shortly.
                  </span>
                </div>
              )}

              {submitError && (
                <div
                  className="mb-6 p-4 rounded-xl flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)' }}
                >
                  <span style={{ color: '#dc2626', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                    Something went wrong. Please try again or email us directly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register('name', { required: true })}
                      style={inputStyle(!!errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Name is required</p>}
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' },
                      })}
                      style={inputStyle(!!errors.phone)}
                    />
                    {errors.phone && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your@company.com"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                    })}
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Subject
                  </label>
                  <select {...register('subject')} style={inputStyle(false)}>
                    <option value="">Select a topic</option>
                    <option>Buy Metals</option>
                    <option>Sell Metals</option>
                    <option>Import / Export</option>
                    <option>Business Partnership</option>
                    <option>Supplier Registration</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    {...register('message', { required: true })}
                    style={{ ...inputStyle(!!errors.message), resize: 'none' }}
                  />
                  {errors.message && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Message is required</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ backgroundColor: '#0B1F3A', color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700 }}
                >
                  {submitting ? 'Sending…' : <> Send Message <ArrowRight size={16} /> </>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
