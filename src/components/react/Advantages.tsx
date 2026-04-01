import { motion } from 'motion/react';
import { TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    { icon: <TrendingUp size={40} />, desc: "Otorgamos liquidez a tu negocio, de manera rápida y eficaz." },
    { icon: <Building2 size={40} />, desc: "Optimizamos el uso de tu línea de crédito, mejorando tus costos financieros." },
    { icon: <CheckCircle2 size={40} />, desc: "Te ayudamos con temas administrativos como la cobranza y así liberar tu tiempo para que lo dediques a tu negocio." },
    { icon: <TrendingUp size={40} />, desc: "Mejoramos tus índices de endeudamiento de cara al sistema financiero." }
  ];

  return (
    <section id="ventajas" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAEAEA] rounded-[4rem] p-12 relative mt-10">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-sm border border-gray-100">
            <span className="text-sm font-bold tracking-wider uppercase text-brand-secondary">
              NUESTRAS VENTAJAS
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-brand-primary flex justify-center mb-6">
                  {adv.icon}
                </div>
                <p className="text-brand-secondary text-sm leading-relaxed font-medium">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}