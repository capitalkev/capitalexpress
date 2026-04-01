import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="productos" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-10 text-black">Soluciones financieras</h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-white rounded-full shadow-lg border border-gray-100 text-brand-primary font-bold text-xl flex items-center justify-between gap-4"
          >
            Factoring <ArrowRight size={24} className="text-brand-primary font-light" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-white rounded-full shadow-lg border border-gray-100 text-brand-primary font-bold text-xl flex items-center justify-between gap-4"
          >
            Confirming <ArrowRight size={24} className="text-brand-primary font-light" />
          </motion.button>
        </div>

        <a href="/enrolate" className="px-12 py-2 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors inline-block">
          Hablemos
        </a>
      </div>
    </section>
  );
}