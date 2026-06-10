import { Link } from 'react-router';
import { Mail, Phone, MessageCircle, MapPin, Linkedin } from 'lucide-react';
import logo from '../../imports/Velnexa_Group_Logo-removebg.png';

const quickLinks = [
  ['Home', '/'],
  ['Materials', '/materials'],
  ['Buy', '/buy'],
  ['Sell', '/sell'],
  ['Import/Export', '/import-export'],
  ['Industries', '/industries'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#091929' }}>
      {/* Accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #D4AF37, #F0C040, #D4AF37)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="mb-5">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '6px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src={logo}
                  alt="Velnexa Group"
                  style={{ height: '70px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <span
                className="block mt-3"
                style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.67rem', letterSpacing: '0.02em' }}
              >
                Velnexa Group — A Unit of Swastikahy Esolutions Pvt Ltd
              </span>
            </div>
            <p
              className="leading-relaxed max-w-sm"
              style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.75 }}
            >
              Velnexa is a global network for bulk metal trading, connecting industries, suppliers, and traders with efficient sourcing and reliable execution.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://wa.me/919220641177"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: '#25D366', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                aria-label="Chat with Velnexa Group on WhatsApp"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/company/velnexa-group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: '#0A66C2', color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
                aria-label="Follow Velnexa Group on LinkedIn"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="uppercase tracking-widest mb-5"
              style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="transition-colors hover:text-[#D4AF37] flex items-center gap-1.5 group"
                    style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                  >
                    <span className="block w-3 h-px group-hover:w-4 transition-all" style={{ backgroundColor: '#D4AF37', opacity: 0.5 }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="uppercase tracking-widest mb-5"
              style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:sales@velnexagroup.com"
                  className="flex items-start gap-3 hover:text-[#D4AF37] transition-colors group"
                  style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-[#D4AF37] transition-colors" style={{ color: '#D4AF37' }} />
                  sales@velnexagroup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919220641177"
                  className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
                  style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                >
                  <Phone size={15} style={{ color: '#D4AF37', flexShrink: 0 }} />
                  +91 92206 41177
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: '#D4AF37' }} />
                <span style={{ color: '#8BA4C0', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  Innov8, 9th Floor, Tower D,<br />
                  Unitech Cyber Park, Sector 39,<br />
                  Gurugram, Haryana, India – 122001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <span style={{ color: '#5C7190', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
            © 2026 Velnexa Group. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem' }}>
            {[['Privacy Policy', '/privacy-policy'], ['Terms of Use', '/terms-of-use'], ['Disclaimer', '/disclaimer']].map(([label, href], i, arr) => (
              <span key={href} className="flex items-center gap-4">
                <Link
                  to={href}
                  style={{ color: '#5C7190', textDecoration: 'none' }}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
                {i < arr.length - 1 && <span style={{ color: '#5C7190', opacity: 0.4 }}>|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
