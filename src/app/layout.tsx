import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Edmilson Oliveira | Desenvolvedor Web Full Stack",
  description: "Portfólio de Edmilson Oliveira, desenvolvedor web full stack focado em experiências digitais premium, acessibilidade e inovação tecnológica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.className}`}>
      <head>
        <link rel="icon" href="/landing-page.jpg" type="image/jpg" />
      </head>
      <body className="antialiased selection:bg-purple-500/30">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

