import { useState } from 'react';

export default function EnrolateForm() {
  const [formData, setFormData] = useState({
    empresa: '', ruc: '', usuarioSunat: '', passwordSunat: '', privacy: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/enrolate', {
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
    <div className="pt-32 pb-24 bg-[#F5F5F5] min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight text-black">HAZTE CLIENTE</h1>
          <p className="text-lg md:text-xl text-brand-secondary uppercase tracking-wide">¡DÉJANOS TUS DATOS PARA INICIAR TU PROCESO DE FACTORING!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-transparent p-4 md:p-8">
          <div className="space-y-10">
            <div className="relative">
              <input type="text" id="empresa" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Nombre Empresa *"
                value={formData.empresa} onChange={e => setFormData({...formData, empresa: e.target.value})} />
              <label htmlFor="empresa" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Nombre Empresa *</label>
            </div>

            <div className="relative">
              <input type="text" id="ruc" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="RUC Empresa *"
                value={formData.ruc} onChange={e => setFormData({...formData, ruc: e.target.value})} />
              <label htmlFor="ruc" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">RUC Empresa *</label>
            </div>

            <div className="relative">
              <input type="text" id="usuarioSunat" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Usuario SUNAT *"
                value={formData.usuarioSunat} onChange={e => setFormData({...formData, usuarioSunat: e.target.value})} />
              <label htmlFor="usuarioSunat" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Usuario SUNAT *</label>
            </div>

            <div className="relative">
              <input type="password" id="passwordSunat" required className="peer w-full border-b border-gray-400 bg-transparent py-2 text-brand-secondary focus:border-brand-primary focus:outline-none placeholder-transparent" placeholder="Contraseña SUNAT *"
                value={formData.passwordSunat} onChange={e => setFormData({...formData, passwordSunat: e.target.value})} />
              <label htmlFor="passwordSunat" className="absolute left-0 -top-3.5 text-sm text-brand-text transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-primary">Contraseña SUNAT *</label>
            </div>

            <div className="flex items-center gap-2 text-sm text-brand-secondary pt-2">
              <input type="checkbox" id="privacy" required className="w-4 h-4 text-brand-primary rounded border-gray-400 focus:ring-brand-primary" 
                checked={formData.privacy} onChange={e => setFormData({...formData, privacy: e.target.checked})} />
              <label htmlFor="privacy" className="cursor-pointer">Acepto la <a href="#" className="text-blue-500 hover:underline">política de privacidad</a>.</label>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="px-12 py-2 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enrolate'}
              </button>
            </div>

            {status === 'success' && (
              <p className="text-green-600 font-medium bg-green-50 p-3 rounded-lg mt-4">¡Gracias! Hemos recibido tus datos.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-medium bg-red-50 p-3 rounded-lg mt-4">Hubo un error al enviar. Intenta nuevamente.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}