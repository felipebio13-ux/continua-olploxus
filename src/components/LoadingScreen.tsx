import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'var(--graphite-900)' }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative">
          <motion.img
            src="https://i.ibb.co/DfqWpvjF/l-xus-logo.png"
            alt="Loxus"
            className="h-14 w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute -inset-8 rounded-full"
            animate={{
              boxShadow: [
                '0 0 30px rgba(0, 212, 255, 0.2)',
                '0 0 60px rgba(0, 212, 255, 0.4)',
                '0 0 30px rgba(0, 212, 255, 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="w-56 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            className="loading-bar h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-xs text-gray-600 tracking-[0.25em] uppercase font-medium"
        >
          Carregando experiencia
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
