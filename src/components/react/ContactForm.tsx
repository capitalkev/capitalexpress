import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', ruc: '', email: '', phone: '', message: '', privacy: false, hasExec: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contactanos" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 uppercase tracking-tight text-black">CONTÁCTANOS</h2>
          <p className="text-xl text-brand-secondary uppercase tracking-wide">¡DÉJANOS TUS DATOS PARA INICIAR TU PROCESO DE FACTORING!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-transparent p-4 md:p-8">
          <div className="space-y-10">
            <div className="relative">
              <input type="text" id="name" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Nombre Contacto *"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Nombre Contacto *</label>
            </div>

            <div className="relative">
              <input type="text" id="ruc" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="RUC Empresa *"
                value={formData.ruc} onChange={e => setFormData({...formData, ruc: e.target.value})} />
              <label htmlFor="ruc" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">RUC Empresa *</label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input type="email" id="email" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Correo Electrónico *"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Correo Electrónico *</label>
              </div>
              <div className="relative">
                <input type="tel" id="phone" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Teléfono *"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Teléfono *</label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm text-brand-secondary pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 text-brand-primary rounded border-gray-400 focus:ring-brand-primary" 
                  checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} />
                <span>Acepto la <a href="#" className="text-blue-500 hover:underline">política de privacidad</a>.</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-brand-primary rounded border-gray-400 focus:ring-brand-primary"
                  checked={formData.hasExec} onChange={e => setFormData({...formData, hasExec: e.target.checked})} />
                <span>Ya tengo ejecutivo.</span>
              </label>
            </div>

            <div className="relative pt-4">
              <textarea id="message" required rows={4} className="w-full border border-gray-400 bg-transparent p-4 text-brand-secondary focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none resize-none" placeholder="Mensaje *"
                value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              <div className="text-right text-xs text-brand-text mt-1">{formData.message.length} / 1000</div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="px-12 py-2 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Enviando...' : 'Solicitar contacto'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-green-600 font-medium bg-green-50 p-3 rounded-lg mt-4">¡Gracias! Hemos recibido tu solicitud.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium bg-red-50 p-3 rounded-lg mt-4">Hubo un error al enviar. Intenta nuevamente.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}