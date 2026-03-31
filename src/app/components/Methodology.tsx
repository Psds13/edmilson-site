"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Sparkles, Languages, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const educationData = [
  { course: "Técnico em Informática", init: "SENAI", year: "2016 - 2017" },
  { course: "Ciência da Computação", init: "Pitágoras", year: "2018 - 2021" },
  { course: "Análise e Desenvolvimento de Sistemas", init: "Laboro", year: "2022 - 2024" },
  { course: "Especialização em Desenvolvimento Full Stack", init: "Estácio", year: "2025" },
  { course: "Técnico em Informática para Internet", init: "SENAC", year: "2025 - 2026" },
];

const certificationsData = [
  { title: "Programador de Sistemas", issuer: "SENAC", image: "/certificates/Programador de Sistemas.png" },
  { title: "Front-End Recode", issuer: "Recode", image: "/certificates/Front-End Recode.png" },
  { title: "Metodologias ágeis", issuer: "SENAC", image: "/certificates/Metodologias ágeis.png" },
  { title: "PHP com Banco de Dados", issuer: "Faculdade Pitágoras", image: "/certificates/Certificado PHP com Banco de Dados.png" },
  { title: "Introdução ao Banco de Dados", issuer: "IPED", image: "/certificates/Certificado Introdução ao banco de Dados.png" },
  { title: "Python Básico", issuer: "IPED", image: "/certificates/Python básico.png" },
  { title: "Vibecoding", issuer: "Oxygeni Hub", image: "/certificates/Vibecoding.png" }
];

export default function Methodology() {
  const [selectedCert, setSelectedCert] = useState<null | typeof certificationsData[0]>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="formacao" className="py-32 relative overflow-hidden bg-[#030008]/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-xs font-medium text-emerald-400 mb-6 uppercase tracking-widest">
            <Sparkles size={12} />
            Trajetória de Evolução
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Histórico <span className="text-gradient">Profissional</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        {/* Academic Timeline Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/5">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Formação Acadêmica</h3>
          </div>

          <div className="space-y-4 relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-purple-500 before:via-purple-500/20 before:to-transparent">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group pb-12 last:pb-0"
              >
                <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#030008] border-2 border-purple-500 group-hover:scale-125 transition-transform duration-300 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                
                <div className="glass p-8 group-hover:border-purple-500/30 transition-all duration-500 group-hover:translate-x-2 bg-[#030008]/40 overflow-hidden relative">
                   <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap size={60} className="text-white" />
                   </div>
                   <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3 block">{item.year}</span>
                   <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors uppercase tracking-tight">{item.course}</h4>
                   <p className="text-gray-400 text-base font-light">{item.init}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Gallery Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/5">
              <Award size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Certificações e Cursos</h3>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemAnim}
                onClick={() => setSelectedCert(cert)}
                className="glass group overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500 bg-[#030008]/40 flex flex-col cursor-zoom-in"
              >
                <div className="aspect-[1.414/1] relative overflow-hidden bg-white/2">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                     <div className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all">
                        <Award className="text-blue-400" size={18} />
                     </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 block">{cert.issuer}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">{cert.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal / Lightbox */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
              >
                 {/* Backdrop */}
                 <div 
                   className="absolute inset-0 bg-[#030008]/90 backdrop-blur-md cursor-pointer"
                   onClick={() => setSelectedCert(null)}
                 />
                 
                 {/* Content */}
                 <motion.div 
                   initial={{ scale: 0.9, opacity: 0, y: 20 }}
                   animate={{ scale: 1, opacity: 1, y: 0 }}
                   exit={{ scale: 0.9, opacity: 0, y: 20 }}
                   className="relative w-full max-w-5xl aspect-[1.414/1] glass border-white/10 overflow-hidden shadow-2xl z-10"
                 >
                    <Image 
                      src={selectedCert.image} 
                      alt={selectedCert.title}
                      fill
                      className="object-contain p-2 md:p-4"
                    />
                    
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-20 group"
                    >
                       <X className="text-white group-hover:rotate-90 transition-transform" />
                    </button>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                       <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{selectedCert.issuer}</span>
                       <h3 className="text-2xl font-bold text-white tracking-tight">{selectedCert.title}</h3>
                    </div>
                 </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 max-w-2xl mx-auto"
          >
             <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/5">
                <Languages size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Idiomas</h3>
            </div>

            <div className="space-y-10">
               {/* Português */}
               <div className="group">
                  <div className="flex justify-between items-end mb-3 px-1">
                     <div className="flex flex-col">
                        <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">Português</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Nativo</span>
                     </div>
                     <span className="text-emerald-400 font-mono text-xs font-bold">10/10</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 relative"
                     >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                     </motion.div>
                  </div>
               </div>

               {/* Inglês */}
               <div className="group">
                  <div className="flex justify-between items-end mb-3 px-1">
                     <div className="flex flex-col">
                        <span className="text-white font-bold text-lg tracking-tight group-hover:text-blue-400 transition-colors">Inglês</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Básico</span>
                     </div>
                     <span className="text-blue-400 font-mono text-xs font-bold">03/10</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "30%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 relative"
                     >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                     </motion.div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-3 italic font-light pl-1">
                    * Focado principalmente em leitura técnica de documentações e termos da área de TI.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
