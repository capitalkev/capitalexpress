import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" 
              alt="Equipo Capital Express" 
              className="rounded-[3rem] shadow-lg object-cover w-full h-[500px] rounded-bl-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-primary text-5xl font-extrabold mb-6">Nosotros</h2>
            <h3 className="text-2xl font-bold text-black mb-6 leading-snug">
              Somos un grupo capacitado de profesionales y asesores con experiencia en el sistema financiero y en el mundo del factoring.
            </h3>
            <div className="space-y-6 text-brand-secondary text-base mb-8">
              <p>
                Si eres pequeña, mediana o gran empresa te apoyamos con soluciones de financiamiento, con el plazo de aprobación más rápido del mercado.
              </p>
              <p>
                Nuestra misión es atender de manera rápida, efectiva y personalizada, todos los requerimientos de nuestros clientes, asesorándolos en el desarrollo de sus negocios y sus necesidades de financiamiento.
              </p>
            </div>
            <button className="px-10 py-2 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-opacity">
              más
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}