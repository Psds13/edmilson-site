"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative bg-[#030008]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="space-y-10 lg:pl-4"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-purple-400 text-sm font-medium"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Disponível para novos projetos</span>
            </motion.div>
            
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Edmilson <br />
                <span className="text-gradient">Oliveira</span>
              </motion.h1>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="text-3xl md:text-4xl text-gray-300 font-light tracking-wide italic"
              >
                Full Stack <span className="text-white/20">|</span> Software Engineer
              </motion.h3>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          >
            Arquiteto soluções digitais de alto impacto, unindo performance técnica à experiências visuais memoráveis e escaláveis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <Link href="#projetos" className="btn-premium group shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              <span className="relative z-10 font-semibold tracking-wide">Explorar Projetos</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/Edmilson_Oliveira.pdf" target="_blank" className="relative group px-8 py-3 rounded-full flex items-center gap-2 text-gray-300 font-medium border border-white/5 hover:border-white/20 transition-all bg-white/2 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Download size={20} className="relative z-10" /> 
              <span className="relative z-10">Download CV</span>
            </Link>
          </motion.div>

          {/* Socials with improved styling */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex items-center gap-8 pt-6 border-t border-white/5 w-fit"
          >
            {[
              { icon: Github, url: "https://github.com/Psds13", label: "Github" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/edmilson-oliveira-1aa5b6215/", label: "Linkedin" },
              { icon: Mail, url: "mailto:edmilsonsegundo15@gmail.com", label: "Email" }
            ].map((social, i) => (
              <Link 
                key={i}
                href={social.url} 
                target="_blank" 
                className="group flex flex-col items-center gap-2 "
              >
                <social.icon size={24} className="text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {social.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ y: y1, opacity }}
          className="relative hidden lg:flex justify-end items-center h-full perspective-1000"
        >
          <div className="relative group">
            {/* Animated Rings */}
            <div className="absolute inset-[-20px] rounded-full border border-purple-500/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-blue-500/5 animate-[spin_30s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-3xl blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative w-[450px] h-[550px] rounded-[40px] glass border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 group-hover:rotate-2 group-hover:scale-[1.02]">
               <Image 
                 src="/eusinho.png" 
                 alt="Edmilson Oliveira"
                 fill
                 className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                 priority
               />
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#030008] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
