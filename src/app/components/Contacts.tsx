"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <section id="contatos" className="py-32 relative overflow-hidden bg-[#030008]">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-xs font-medium text-purple-400 mb-6 uppercase tracking-widest">
            <Sparkles size={12} />
            Conexão
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Seja para um novo projeto, uma colaboração ou apenas para trocar ideias sobre tecnologia, meu canal está sempre aberto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="space-y-8"
          >
            <div className="glass p-8 group card-shine border-white/5 hover:border-purple-500/20 transition-all duration-500 bg-[#030008]/40">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
                     <Mail className="text-purple-400" size={28} />
                  </div>
                  <div>
                     <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail Profissional</h4>
                     <a href="mailto:edmilsonsegundo15@gmail.com" className="text-xl text-white font-medium hover:text-purple-400 transition-colors break-all tracking-tight italic">
                        edmilsonsegundo15@gmail.com
                     </a>
                  </div>
               </div>
            </div>

             <div className="glass p-8 group card-shine border-white/5 hover:border-blue-500/20 transition-all duration-500 bg-[#030008]/40">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                     <Phone className="text-blue-400" size={28} />
                  </div>
                  <div>
                     <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Telefone / WhatsApp</h4>
                     <a href="tel:+5598984210555" className="text-xl text-white font-medium hover:text-blue-400 transition-colors tracking-tight italic">
                        (98) 98421-0555
                     </a>
                  </div>
               </div>
            </div>

            <div className="pt-8 flex flex-col gap-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] pl-2">Social Hub</h4>
              <div className="flex gap-6">
                {[
                  { icon: Linkedin, url: "https://www.linkedin.com/in/edmilson-oliveira-1aa5b6215/", color: "hover:text-[#0A66C2]" },
                  { icon: Github, url: "https://github.com/Psds13", color: "hover:text-white" }
                ].map((social, i) => (
                  <Link 
                    key={i}
                    href={social.url} 
                    target="_blank" 
                    className="glass w-16 h-16 rounded-2xl flex items-center justify-center group hover:-translate-y-2 transition-all duration-500 border-white/5 hover:border-white/20 bg-[#030008]/40"
                  >
                     <social.icon className={`text-gray-400 transition-all duration-500 ${social.color} group-hover:scale-110`} size={28} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="glass p-10 rounded-[32px] border-white/5 bg-[#030008]/40 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-purple-500/30" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Direct Message</span>
               </div>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Nome</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all outline-none" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">E-mail</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all outline-none" />
                 </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Sua Mensagem</label>
                <textarea rows={5} placeholder="Descreva sua ideia ou projeto..." className="w-full bg-white/2 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/5 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="btn-premium w-full group overflow-hidden bg-white/5 py-4 justify-center shadow-lg hover:shadow-purple-500/20">
                <span className="relative z-10 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] group-hover:scale-105 transition-transform">
                  Enviar Mensagem <Send size={18} className="rotate-12 group-hover:rotate-0 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
