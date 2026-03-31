"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass rounded-none border-x-0 border-t-0 bg-space-black/80 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full border border-purple-500/50 overflow-hidden">
             <Image src="/landing-page.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block text-white">
            Edmilson<span className="text-purple-500">.dev</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</Link></li>
            <li><Link href="#sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="#habilidades" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Tecnologias</Link></li>
            <li><Link href="#projetos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Projetos</Link></li>
            <li><Link href="#formacao" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Formação</Link></li>
          </ul>
        </nav>

        <Link href="#contatos" className="hidden md:flex text-sm font-medium text-white bg-purple-600/20 border border-purple-500/50 hover:bg-purple-600/40 px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          Contato
        </Link>
        
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
