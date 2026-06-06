import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919220641177?text=Hello%20Velnexa%20Group%2C%0A%0AI%20would%20like%20to%20discuss%20a%20business%20requirement."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-white"
      style={{ backgroundColor: '#25D366', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:block">Chat Now</span>
    </motion.a>
  );
}
