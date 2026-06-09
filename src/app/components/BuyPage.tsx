import { useState, useRef, type FocusEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { trackEvent } from '../lib/analytics';
import { CheckCircle2, Mail, Phone, ArrowRight, ChevronDown, Check, X } from 'lucide-react';

type FormData = {
  quantity: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  otherMaterial: string;
};

const MATERIAL_OPTIONS = [
  'Copper',
  'Aluminium',
  'Iron & Steel',
  'Brass',
  'Zinc',
  'Lead',
  'Stainless Steel',
  'Other',
];

const benefits = [
  ['Verified Suppliers', 'All suppliers are verified for quality and reliability.'],
  ['Best Market Pricing', 'Competitive pricing through our extensive network.'],
  ['Bulk Quantities', 'Handle any scale from tonnes to container loads.'],
  ['Fast Execution', 'Quick matching and deal closure with our network.'],
  ['Pan-India Coverage', 'Sourcing from across India with export capability.'],
];

const WEB3FORMS_KEY = '19c45fc3-669a-4503-9012-0797a7294eaf'; // Replace with your key from web3forms.com

export function BuyPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ shouldUnregister: true });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [materialDropdownOpen, setMaterialDropdownOpen] = useState(false);
  const [materialError, setMaterialError] = useState(false);
  const materialDropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownBlur = (e: FocusEvent<HTMLDivElement>) => {
    const related = e.relatedTarget as Node | null;
    if (!related || !materialDropdownRef.current?.contains(related)) {
      setMaterialDropdownOpen(false);
    }
  };

  const toggleMaterial = (option: string) => {
    setSelectedMaterials(prev =>
      prev.includes(option) ? prev.filter(m => m !== option) : [...prev, option]
    );
    setMaterialError(false);
  };

  const onSubmit = async (data: FormData) => {
    if (selectedMaterials.length === 0) {
      setMaterialError(true);
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: 'New Buy Requirement - Velnexa Group',
        from_name: data.name,
        Material: selectedMaterials.join(', '),
        ...(data.otherMaterial ? { 'Other Material (Specified)': data.otherMaterial } : {}),
        Quantity: data.quantity,
        Location: data.location,
        Name: data.name,
        Phone: data.phone,
        Email: data.email || '—',
        'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
      };
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent('form_submit', { form_name: 'buy_form' });
        setSubmitted(true);
        setSelectedMaterials([]);
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
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#D4AF37', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span
              className="inline-block px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              Procurement
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Source Bulk Materials<br />with Confidence
            </h1>
            <p
              className="text-gray-300 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Velnexa enables efficient procurement of ferrous and non-ferrous metals through a strong network of suppliers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm"
              style={{ border: '1px solid rgba(11,31,58,0.07)' }}
            >
              <h2
                className="mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.5rem', fontWeight: 800 }}
              >
                Submit Your Requirement
              </h2>
              <p className="mb-7" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                Fill in the details below and our team will get back to you within 24 hours.
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
                {/* Multiselect Material Required */}
                <div className="relative" ref={materialDropdownRef} onBlur={handleDropdownBlur} tabIndex={-1}>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Material Required *
                  </label>
                  <button
                    type="button"
                    onClick={() => setMaterialDropdownOpen(o => !o)}
                    className="w-full flex items-center justify-between text-left transition-colors"
                    style={{ ...inputStyle(materialError), cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden' }}
                  >
                    <span style={{ color: selectedMaterials.length === 0 ? '#9CA3AF' : '#0B1F3A', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {selectedMaterials.length === 0
                        ? 'Select one or more materials'
                        : selectedMaterials.length === 1
                          ? selectedMaterials[0]
                          : `${selectedMaterials[0]} +${selectedMaterials.length - 1} more`}
                    </span>
                    <ChevronDown size={16} style={{ color: '#5C7190', flexShrink: 0, transform: materialDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>

                  <AnimatePresence>
                    {materialDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute z-20 w-full mt-1 rounded-lg shadow-lg overflow-hidden"
                        style={{ backgroundColor: '#fff', border: '1.5px solid rgba(11,31,58,0.12)' }}
                      >
                        {MATERIAL_OPTIONS.map(option => {
                          const selected = selectedMaterials.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggleMaterial(option)}
                              className="w-full flex items-center justify-between px-4 py-2 text-left transition-colors hover:bg-[#F5F7FA]"
                            >
                              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#0B1F3A' }}>{option}</span>
                              {selected && <Check size={14} style={{ color: '#1F4E79', flexShrink: 0 }} />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedMaterials.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selectedMaterials.map(m => (
                        <span key={m} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(31,78,121,0.09)', color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500 }}>
                          {m}
                          <button type="button" onClick={() => toggleMaterial(m)} className="hover:opacity-70"><X size={11} /></button>
                        </span>
                      ))}
                    </div>
                  )}

                  {materialError && (
                    <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>
                      Please select at least one material
                    </p>
                  )}
                </div>

                {/* Other material text field */}
                {selectedMaterials.includes('Other') && (
                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Please specify other material *
                    </label>
                    <input
                      type="text"
                      placeholder="Describe the material"
                      {...register('otherMaterial', { required: selectedMaterials.includes('Other') })}
                      style={inputStyle(!!errors.otherMaterial)}
                    />
                    {errors.otherMaterial && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Please specify the other material</p>}
                  </div>
                )}

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Quantity (Approx.) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 MT per month"
                    {...register('quantity', { required: true })}
                    style={inputStyle(!!errors.quantity)}
                  />
                  {errors.quantity && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Quantity is required</p>}
                </div>

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="City / State / Country"
                    {...register('location', { required: true })}
                    style={inputStyle(!!errors.location)}
                  />
                  {errors.location && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Location is required</p>}
                </div>

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
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@company.com"
                    {...register('email', {
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                    })}
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>{errors.email.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ backgroundColor: '#0B1F3A', color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700 }}
                >
                  {submitting ? 'Submitting…' : <> Submit Requirement <ArrowRight size={16} /> </>}
                </button>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                  Why Buy Through Velnexa?
                </h3>
                <div className="space-y-5">
                  {benefits.map(([title, desc], i) => (
                    <div key={i} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: 'rgba(212,175,55,0.12)' }}
                      >
                        <CheckCircle2 size={15} style={{ color: '#D4AF37' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', color: '#0B1F3A', fontWeight: 700, fontSize: '0.9375rem' }}>
                          {title}
                        </div>
                        <div style={{ fontFamily: 'Inter, sans-serif', color: '#5C7190', fontSize: '0.85rem', marginTop: '2px' }}>
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #0B1F3A, #1F4E79)', border: '1px solid rgba(212,175,55,0.18)' }}
              >
                <p style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Need to speak with our team directly?
                </p>
                <a
                  href="mailto:sales@velnexagroup.com"
                  className="flex items-center gap-2 hover:text-white transition-colors mb-2.5"
                  style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  <Mail size={15} />
                  sales@velnexagroup.com
                </a>
                <a
                  href="tel:+919220641177"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  <Phone size={15} />
                  +91 92206 41177
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
