import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Mirror Perfumaria" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Perfumes que refletem sua essência. Qualidade premium com alta fixação e ingredientes selecionados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/catalogo" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Catálogo
              </Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sobre Nós
              </Link>
              <Link to="/beneficios" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Benefícios
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Informações
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/politica-troca" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Política de Troca
              </Link>
              <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacidade
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">(11) 98245-111</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">mirrorperfumaria@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mirror Perfumaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
