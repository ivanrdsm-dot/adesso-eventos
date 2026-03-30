'use client';

import PageHero from '@/components/PageHero';
import { useLocale } from '@/lib/locale-context';
import { FadeInLeft, FadeInRight, FadeInUp } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5215510703056';

export default function ContactoPage() {
  const { locale, t } = useLocale();
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', eventType: '', guests: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const msg = locale === 'es'
      ? `Hola, soy ${formState.name}. Me interesa información sobre ${formState.eventType || 'un evento'}. ${formState.message}`
      : `Hello, I'm ${formState.name}. I'm interested in ${formState.eventType || 'an event'}. ${formState.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSubmitting(false);
  };

  return (
    <>
      <PageHero
        title={t.contact.title}
        highlight={t.contact.titleHighlight}
        subtitle={t.contact.subtitle}
      />

      <section className="relative py-24">
        <div className="absolute inset-0 noise-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeInLeft>
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-8">
                  {locale === 'es' ? 'Solicita tu Cotización' : 'Request Your Quote'}
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="text-white/50 text-sm mb-1 block">{t.contact.form.name}</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 text-sm mb-1 block">{t.contact.form.email}</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-sm mb-1 block">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 text-sm mb-1 block">{t.contact.form.eventType}</label>
                      <select
                        value={formState.eventType}
                        onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
                      >
                        <option value="" className="bg-dark">{locale === 'es' ? 'Seleccionar...' : 'Select...'}</option>
                        {t.contact.form.eventTypes.map((type, i) => (
                          <option key={i} value={type} className="bg-dark">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/50 text-sm mb-1 block">{t.contact.form.guests}</label>
                      <input
                        type="number"
                        value={formState.guests}
                        onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-sm mb-1 block">{t.contact.form.message}</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-dark to-gold text-black font-bold text-lg hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                  </motion.button>
                </div>
              </form>
            </FadeInLeft>

            {/* Contact Info */}
            <FadeInRight>
              <div className="space-y-6">
                {/* WhatsApp Card */}
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex items-center gap-5 card-hover block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                    <p className="text-white/50 text-sm">{t.contact.info.whatsapp}</p>
                    <p className="text-[#25D366] font-semibold mt-1">55.1070.3056</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 ml-auto" />
                </motion.a>

                {/* Phone Cards */}
                <motion.a
                  href="tel:+525555248542"
                  className="glass rounded-2xl p-6 flex items-center gap-5 card-hover block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{locale === 'es' ? 'Teléfonos' : 'Phones'}</h4>
                    <p className="text-white/50 text-sm">{t.contact.info.phone}</p>
                    <p className="text-gold font-semibold mt-1">55.5524.8542 / 55.5524.9680</p>
                    <p className="text-gold/70 text-sm">Móvil: 55.5419.6358</p>
                  </div>
                </motion.a>

                {/* Email Card */}
                <motion.div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7 text-teal" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{locale === 'es' ? 'Correo Electrónico' : 'Email'}</h4>
                      <p className="text-white/50 text-sm">{t.contact.info.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-[74px]">
                    <a href="mailto:asoto@adessomexico.com" className="block text-teal hover:text-teal-dark transition-colors text-sm">asoto@adessomexico.com</a>
                    <a href="mailto:mherrero@adessomexico.com" className="block text-teal hover:text-teal-dark transition-colors text-sm">mherrero@adessomexico.com</a>
                    <a href="mailto:jlescutia@adessomexico.com" className="block text-teal hover:text-teal-dark transition-colors text-sm">jlescutia@adessomexico.com</a>
                  </div>
                </motion.div>

                {/* Address Card */}
                <motion.div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{locale === 'es' ? 'Oficina Central' : 'Main Office'}</h4>
                      <p className="text-white/50 text-sm">{t.footer.address}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Schedule */}
                <motion.div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{locale === 'es' ? 'Horario' : 'Schedule'}</h4>
                      <p className="text-white/50 text-sm">{locale === 'es' ? 'Lunes a Viernes: 9:00 - 18:00' : 'Monday to Friday: 9:00 - 18:00'}</p>
                      <p className="text-gold text-sm mt-1">{locale === 'es' ? 'WhatsApp 24/7' : 'WhatsApp 24/7'}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
}
