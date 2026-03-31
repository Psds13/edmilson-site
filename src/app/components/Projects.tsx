"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, ShieldCheck, Database, Smartphone, Monitor, Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Borasiô",
    description: "Plataforma de mobilidade urbana com foco em acessibilidade e economia, conectando motoristas e passageiros de forma eficiente e segura.",
    image: "/projects/ora.png",
    techs: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
    highlights: [
      { text: "Infraestrutura Escalável", icon: Layers },
      { text: "Processamento Real-time", icon: Sparkles },
      { text: "Mobile First Design", icon: Smartphone },
      { text: "Segurança de Dados", icon: ShieldCheck }
    ],
    live: "https://pi-borasio.vercel.app/"
  },
  {
    id: 2,
    title: "MeuCarrinho",
    description: "Ecossistema completo para gestão de supermercados, com PDV web, controle de estoque inteligente e relatórios analíticos em tempo real.",
    image: "/projects/logo.png",
    techs: ["HTML", "CSS", "JavaScript", "EJS"],
    highlights: [
      { text: "Gestão de Inventário", icon: Database },
      { text: "Relatórios Dinâmicos", icon: Monitor },
      { text: "Interface Otimizada", icon: Smartphone },
      { text: "Arquitetura Modular", icon: Layers }
    ],
    live: "https://pi-meu-carrinho.vercel.app/"
  },
  {
    id: 3,
    title: "Legacidos",
    description: "Museu digital interativo focado na preservação histórica da tecnologia, apresentando dispositivos icônicos que moldaram a era moderna.",
    image: "/projects/legacidos.png",
    techs: ["Next.js", "React", "CSS", "JavaScript"],
    highlights: [
      { text: "Experiência Imersiva", icon: Sparkles },
      { text: "Curadoria Digital", icon: Layers },
      { text: "UI Retrô-Moderna", icon: Monitor },
      { text: "História Tech", icon: ShieldCheck }
    ],
    live: "https://legacidos.vercel.app/"
  },
  {
    id: 4,
    title: "GEDS Inovação",
    description: "Hub de soluções tecnológicas sob medida para empresas e empreendedores, acelerando a transformação digital com foco em ROI.",
    image: "/projects/GEDS Inovação.jpg",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    highlights: [
      { text: "Transformação Digital", icon: Briefcase },
      { text: "Performance Extrema", icon: Sparkles },
      { text: "SEO & UX Premium", icon: Monitor },
      { text: "Cloud Native", icon: Layers }
    ],
    live: "https://geds-tech.vercel.app/"
  },
  {
    id: 5,
    title: "smartUPA",
    description: "Sistema inteligente de triagem e gestão para UPAs de São Luís, otimizando o fluxo de pacientes e a eficiência operacional da saúde pública.",
    image: "/projects/smartUPA.png",
    techs: ["HTML", "CSS", "JavaScript"],
    highlights: [
      { text: "Sistemas de Saúde", icon: Briefcase },
      { text: "Impacto Social", icon: Sparkles },
      { text: "Gestão Hospitalar", icon: ShieldCheck },
      { text: "Triagem Inteligente", icon: Smartphone }
    ],
    live: "https://sistema-upa-mauve.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-32 relative overflow-hidden bg-[#030008]">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 text-xs font-medium text-purple-400 mb-6 uppercase tracking-widest">
            <Sparkles size={12} />
            Portfólio Selecionado
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-32 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-3/5 group cursor-pointer">
                <div className="relative h-[350px] md:h-[450px] w-full rounded-[32px] overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl shadow-black">
                  <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                     <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-2">
                       <Monitor size={14} /> Case study em breve
                     </span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-purple-400 text-xs font-bold tracking-[0.3em] uppercase">Projeto #{project.id}</span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h3>
                </div>
                
                <div className="relative">
                   <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/30 to-transparent" />
                   <p className="text-gray-300 text-lg leading-relaxed font-light pl-2">
                     {project.description}
                   </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/2 text-gray-300 rounded-full border border-white/5 group-hover:border-purple-500/20 transition-all duration-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-white/5">
                  {project.highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 text-gray-400 group/item">
                        <div className="w-8 h-8 rounded-lg bg-white/2 flex items-center justify-center group-hover/item:bg-purple-500/10 group-hover/item:text-purple-400 transition-all duration-300">
                          <Icon size={14} />
                        </div>
                        <span className="text-xs font-medium tracking-wide">{item.text}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center gap-8 pt-6">
                  {project.live !== "#" && (
                     <Link href={project.live} target="_blank" className="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-widest hover:text-blue-400 transition-all group/link">
                       <ExternalLink size={18} className="group-hover/link:-translate-y-1 transition-transform" /> 
                       <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 after:transition-all group-hover/link:after:w-full">Ver Demonstração</span>
                     </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
