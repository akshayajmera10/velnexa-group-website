import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export function ScrollNavButton() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollY / docHeight : 0;
      setVisible(scrollY > 40);
      setAtBottom(pct > 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-nav"
          onClick={handleClick}
          aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
          className="fixed bottom-20 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: '#0B1F3A',
            boxShadow: '0 4px 16px rgba(11,31,58,0.28)',
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          whileHover={{ scale: 1.12, y: -2, boxShadow: '0 8px 24px rgba(11,31,58,0.38)' }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {atBottom ? (
              <motion.span
                key="up"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.16 }}
                className="flex items-center justify-center"
              >
                <ArrowUp size={17} color="white" strokeWidth={2.5} />
              </motion.span>
            ) : (
              <motion.span
                key="down"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.16 }}
                className="flex items-center justify-center"
              >
                <ArrowDown size={17} color="white" strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
