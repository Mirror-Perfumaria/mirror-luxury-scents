import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Sparkles, Shield, Clock, Gift, Leaf, Heart, Award, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Clock,
    title: 'Alta Fixação',
    description: 'Nossas fragrâncias duram até 24 horas, garantindo que você se sinta confiante o dia todo.',
    detail: 'Utilizamos concentrações premium de essências que garantem uma performance superior às fragrâncias convencionais.',
  },
  {
    icon: Leaf,
    title: '100% Orgânico',
    description: 'Ingredientes naturais selecionados para uma experiência olfativa pura e autêntica.',
    detail: 'Sem parabenos, sem sulfatos, sem testes em animais. Apenas ingredientes da mais alta qualidade.',
  },
  {
    icon: Shield,
    title: 'Seguro para a Pele',
    description: 'Formulações dermatologicamente testadas e aprovadas para todos os tipos de pele.',
    detail: 'Nossos perfumes passam por rigorosos testes de qualidade e segurança antes de chegarem até você.',
  },
  {
    icon: Gift,
    title: 'Devolução Garantida',
    description: 'Não ficou satisfeito? Devolvemos 100% do seu dinheiro em até 30 dias.',
    detail: 'Sem burocracia, sem perguntas. Sua satisfação é nossa prioridade número um.',
  },
  {
    icon: Heart,
    title: 'Custo-Benefício Premium',
    description: 'Fragrâncias de alta qualidade por preços justos e acessíveis.',
    detail: 'Oferecemos a mesma qualidade das grandes marcas por uma fração do preço.',
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Cada frasco passa por controle de qualidade rigoroso.',
    detail: 'Do desenvolvimento à embalagem, cada etapa é cuidadosamente supervisionada.',
  },
  {
    icon: RefreshCw,
    title: 'Entrega Rápida',
    description: 'Enviamos para todo o Brasil com prazo de entrega rápido e seguro.',
    detail: 'Embalagens especiais que protegem seu perfume durante todo o transporte.',
  },
  {
    icon: Sparkles,
    title: 'Exclusividade',
    description: 'Fragrâncias exclusivas desenvolvidas por perfumistas renomados.',
    detail: 'Cada perfume é uma obra de arte olfativa única, criada para você se destacar.',
  },
];

const Beneficios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Por que escolher a <span className="text-gradient-gold">Mirror</span>?
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Descubra todos os benefícios de fazer parte da família Mirror Perfumaria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {benefit.description}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        {benefit.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Pronto para experimentar a <span className="text-gradient-gold">diferença</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore nosso catálogo e encontre a fragrância perfeita para você.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/catalogo">Ver Catálogo</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Beneficios;
