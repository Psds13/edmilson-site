const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto text-center px-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Edmilson Oliveira</span>. Todos os direitos reservados.
        </p>
        <div className="mt-6">
          <a href="#hero" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

