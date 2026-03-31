"use client";

import { motion, type Variants } from "framer-motion";
import { User, Target, Code, Coffee, Sparkles } from "lucide-react";

export default function Sobre() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  const stats = [
    { icon: User, label: "Perfil", text: "Desenvolvedor Full Stack apaixonado por arquitetura e inovação.", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Target, label: "Objetivo", text: "Sistemas web eficientes, acessíveis e escaláveis.", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Code, label: "Tecnologias", text: "Domínio em Next.js, React, Spring Boot e ecossistema Cloud.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { icon: Coffee, label: "Cultura", text: "Aprendizado contínuo focado em clean code e performance.", color: "text-orange-400", bg: "bg-orange-500/10" },
  ];

  return (
    <section id="sobre" className="py-32 relative overflow-hidden bg-[#030008]/50">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

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
            Minha Jornada
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Evolução <span className="text-gradient">Constante</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light pl-6">
                <p>
                  Sou Desenvolvedor Full Stack com sólida experiência na construção de ecossistemas digitais modernos utilizando <span className="text-white font-medium">PHP, JavaScript, Next.js, React e Angular.</span>
                </p>
                <p>
                  No backend, projeto arquiteturas robustas com <span className="text-white font-medium">Spring Boot e APIs REST</span>, priorizando sempre a integridade dos dados em PostgreSQL e MySQL, além de garantir alta performance e escalabilidade.
                </p>
                <p>
                  Meu propósito é orquestrar soluções que transcendem o código—atuando desde a <span className="text-white font-medium">concepção da UX</span> até a implementação de infraestruturas seguras e eficientes, focadas no sucesso do usuário final.
                </p>
              </div>
            </div>
            
            <div className="pt-8">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="glass p-1 rounded-full w-fit group cursor-default shadow-lg"
               >
                 <div className="px-6 py-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-300">Residindo em São Luís, Maranhão</span>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item} 
                className="glass p-8 group card-shine border-white/5 hover:border-purple-500/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className={`${stat.color}`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{stat.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
