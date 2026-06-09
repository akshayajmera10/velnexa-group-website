import { useState, useRef, type FocusEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { trackEvent } from '../lib/analytics';
import { CheckCircle2, Mail, Phone, ArrowRight, TrendingUp, Upload, X, ImageIcon, ChevronDown, Check } from 'lucide-react';

type SellFormData = {
  quantity: string;
  condition: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  otherMaterial: string;
};

const MATERIAL_OPTIONS = [
  'Copper',
  'Aluminium',
  'Iron & Steel / HMS',
  'Brass',
  'Zinc',
  'Lead',
  'Stainless Steel',
  'Mixed Metal Inventory',
  'Surplus Material',
  'Other',
];

const benefits = [
  ['Best Value Realisation', 'Access competitive market pricing through our extensive buyer network.'],
  ['Verified Buyer Network', 'Connected to trusted buyers and trading partners across industries.'],
  ['Hassle-free Process', 'We handle logistics and documentation end to end.'],
  ['Transparent Pricing', 'No hidden charges — what you see is what you get.'],
  ['Quick Payments', 'Fast payment processing after deal confirmation.'],
];

const WEB3FORMS_KEY = '19c45fc3-669a-4503-9012-0797a7294eaf';
// Get a free API key at: https://imgbb.com/api
const IMGBB_KEY = 'e4fb6f45da0af4f011fabb18d2060537';

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const uploadToImgBB = async (file: File): Promise<string | null> => {
  try {
    const base64 = await fileToBase64(file);
    const fd = new window.FormData();
    fd.append('key', IMGBB_KEY);
    fd.append('image', base64);
    const res = await fetch('https://api.imgbb.com/1/upload', { method: 'POST', body: fd });
    const json = await res.json();
    return (json.data?.url as string) ?? null;
  } catch (_err) {
    return null;
  }
};

export function SellPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SellFormData>({ shouldUnregister: true });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [materialDropdownOpen, setMaterialDropdownOpen] = useState(false);
  const [materialError, setMaterialError] = useState(false);
  const materialDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  const onSubmit = async (data: SellFormData) => {
    if (selectedMaterials.length === 0) {
      setMaterialError(true);
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      // Upload images to ImgBB and collect public URLs
      let imageLinks = '';
      if (uploadedFiles.length > 0 && IMGBB_KEY !== 'YOUR_IMGBB_API_KEY') {
        const urls = await Promise.all(uploadedFiles.map(uploadToImgBB));
        const valid = urls.filter(Boolean) as string[];
        if (valid.length > 0) {
          imageLinks = valid.map((url, i) => `Photo ${i + 1}: ${url}`).join('\n');
        }
      }

      const payload: Record<string, string> = {
        access_key: WEB3FORMS_KEY,
        subject: 'New Sell Requirement - Velnexa Group',
        from_name: data.name,
        'Material Category': selectedMaterials.join(', '),
        ...(data.otherMaterial ? { 'Other Material (Specified)': data.otherMaterial } : {}),
        Quantity: data.quantity,
        Condition: data.condition || '—',
        Location: data.location,
        Name: data.name,
        Phone: data.phone,
        Email: data.email || '—',
        ...(imageLinks ? { 'Uploaded Photos': imageLinks } : {}),
        'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        trackEvent('form_submit', { form_name: 'sell_form' });
        setSubmitted(true);
        setUploadedFiles([]);
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files].slice(0, 5));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
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
              Sell Metals &amp; Surplus Inventory
            </span>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.125rem)', fontWeight: 900, lineHeight: 1.1 }}
            >
              Sell Metals at<br />Competitive Market Prices
            </h1>
            <p
              className="text-gray-300 max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Connect with verified buyers and trading partners through Velnexa’s trusted metal network. From surplus inventory to bulk metal lots, we help you maximize value through transparent pricing and efficient execution.
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
                Submit Your Material Details
              </h2>
              <p className="mb-7" style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                Share your material specifications and our team will connect you with suitable buyers and competitive market opportunities.
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
                {/* Multiselect Material Category */}
                <div className="relative" ref={materialDropdownRef} onBlur={handleDropdownBlur} tabIndex={-1}>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Material Category *
                  </label>
                  <button
                    type="button"
                    onClick={() => setMaterialDropdownOpen(o => !o)}
                    className="w-full flex items-center justify-between text-left transition-colors"
                    style={{
                      ...inputStyle(materialError),
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    <span style={{ color: selectedMaterials.length === 0 ? '#9CA3AF' : '#0B1F3A', fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {selectedMaterials.length === 0
                        ? 'Select one or more materials'
                        : selectedMaterials.length === 1
                          ? selectedMaterials[0]
                          : `${selectedMaterials[0]} +${selectedMaterials.length - 1} more`}
                    </span>
                    <ChevronDown
                      size={16}
                      style={{
                        color: '#5C7190',
                        flexShrink: 0,
                        transform: materialDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
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
                              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#0B1F3A' }}>
                                {option}
                              </span>
                              {selected && <Check size={14} style={{ color: '#1F4E79', flexShrink: 0 }} />}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Selected chips */}
                  {selectedMaterials.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selectedMaterials.map(m => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: 'rgba(31,78,121,0.09)', color: '#1F4E79', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500 }}
                        >
                          {m}
                          <button type="button" onClick={() => toggleMaterial(m)} className="hover:opacity-70">
                            <X size={11} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {materialError && (
                    <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>
                      Please select at least one material category
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
                    {errors.otherMaterial && (
                      <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>
                        Please specify the other material
                      </p>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Quantity Available *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 20 MT"
                      {...register('quantity', { required: true })}
                      style={inputStyle(!!errors.quantity)}
                    />
                    {errors.quantity && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: 'Inter, sans-serif' }}>Quantity is required</p>}
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Condition
                    </label>
                    <select {...register('condition')} style={inputStyle(false)}>
                      <option value="">Select Condition</option>
                      <option>Clean / Sorted</option>
                      <option>Mixed / Unsorted</option>
                      <option>Heavy Melt</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="City / State"
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

                <div>
                  <label className="block mb-1.5 text-sm" style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Upload Photos <span style={{ color: '#5C7190', fontWeight: 400 }}>(Optional — up to 5 images)</span>
                  </label>
                  <div
                    className="relative rounded-lg border-2 border-dashed transition-colors duration-200 hover:border-[#1F4E79] cursor-pointer"
                    style={{ borderColor: 'rgba(11,31,58,0.2)', backgroundColor: '#F5F7FA' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="flex flex-col items-center justify-center py-6 gap-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(31,78,121,0.08)' }}>
                        <Upload size={18} style={{ color: '#1F4E79' }} />
                      </div>
                      <p style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 500 }}>
                        Click to upload photos
                      </p>
                      <p style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}>
                        PNG, JPG, WEBP up to 10MB each
                      </p>
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {uploadedFiles.map((file, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                          style={{ backgroundColor: 'rgba(31,78,121,0.08)', border: '1px solid rgba(31,78,121,0.15)' }}
                        >
                          <ImageIcon size={13} style={{ color: '#1F4E79', flexShrink: 0 }} />
                          <span style={{ color: '#0B1F3A', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                            className="hover:opacity-70 transition-opacity"
                          >
                            <X size={13} style={{ color: '#5C7190' }} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F0C040)', color: '#0B1F3A', fontFamily: 'Poppins, sans-serif', fontSize: '0.9375rem', fontWeight: 700 }}
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
                  Why Sell Through Velnexa?
                </h3>
                <div className="space-y-5">
                  {benefits.map(([title, desc], i) => (
                    <div key={i} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: 'linear-gradient(135deg, #D4AF37, #F0C040)' }}
                      >
                        <TrendingUp size={14} style={{ color: '#0B1F3A' }} />
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
                  Talk to us directly about your material requirements and selling opportunities.
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
