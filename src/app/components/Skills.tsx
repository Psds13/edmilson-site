"use client";

import { motion, type Variants   } from "framer-motion";
import { FaReact, FaJava, FaPhp, FaNodeJs, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot, SiPostgresql, SiMysql, SiTypescript, SiTailwindcss, SiCloudflare } from "react-icons/si";
import { Sparkles } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-blue-400", shadow: "shadow-blue-500/10" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white", shadow: "shadow-white/10" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", shadow: "shadow-blue-600/10" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", shadow: "shadow-cyan-400/10" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500", shadow: "shadow-green-500/10" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400", shadow: "shadow-indigo-400/10" },
      { name: "Java", icon: FaJava, color: "text-orange-500", shadow: "shadow-orange-500/10" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-400", shadow: "shadow-green-400/10" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300", shadow: "shadow-blue-300/10" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500", shadow: "shadow-blue-500/10" },
      { name: "Redis", icon: FaDatabase, color: "text-red-500", shadow: "shadow-red-500/10" },
      { name: "Cloud", icon: SiCloudflare, color: "text-orange-400", shadow: "shadow-orange-400/10" }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", icon: FaDocker, color: "text-blue-400", shadow: "shadow-blue-400/10" },
      { name: "APIs REST", icon: FaNodeJs, color: "text-emerald-400", shadow: "shadow-emerald-400/10" },
      { name: "Git", icon: FaDatabase, color: "text-orange-600", shadow: "shadow-orange-600/10" },
      { name: "Linux", icon: FaDocker, color: "text-gray-400", shadow: "shadow-gray-400/10" }
    ]
  }
];

export default function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      } 
    }
  };

  return (
    <section id="habilidades" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-xs font-medium text-blue-400 mb-6 uppercase tracking-widest">
            <Sparkles size={12} />
            Stack Tecnológica
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Poder de <span className="text-gradient">Execução</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all duration-500 group flex flex-col h-full bg-[#030008]/40"
            >
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 text-center flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-white/5 group-hover:w-12 group-hover:bg-blue-500/30 transition-all duration-500"></span>
                {skillGroup.category}
                <span className="w-8 h-[1px] bg-white/5 group-hover:w-12 group-hover:bg-blue-500/30 transition-all duration-500"></span>
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 flex-grow"
              >
                {skillGroup.items.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={i} 
                      variants={itemAnim}
                      className={`flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white/2 border border-white/5 hover:border-white/20 transition-all duration-500 group/item cursor-default hover:bg-white/5 ${skill.shadow} hover:shadow-xl`}
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 blur-lg opacity-0 group-hover/item:opacity-40 transition-opacity duration-500 ${skill.color} bg-current`}></div>
                        <Icon className={`text-3xl ${skill.color} relative z-10 group-hover/item:scale-110 group-hover/item:-translate-y-1 transition-all duration-500`} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover/item:text-white transition-colors">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
