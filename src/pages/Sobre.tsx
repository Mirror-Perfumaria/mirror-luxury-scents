import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Sparkles, Heart, Award, Users } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Sobre = () => {
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
                Sobre a <span className="text-gradient-gold">Mirror</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça nossa história e o compromisso com a excelência em perfumaria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center p-12">
                    <img src={logo} alt="Mirror Perfumaria" className="w-full max-w-sm" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">
                  Nossa História
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Criada para trazer produtos diferenciados e de alta qualidade
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    A Mirror cria fragrâncias autorais e exclusivas, todas na concentração Parfum, 
                    desenvolvidas com matérias-primas selecionadas e assinadas por perfumistas renomados. 
                    Cada criação é pensada para ter profundidade, evolução real na pele e uma assinatura 
                    que não se confunde.
                  </p>
                  <p>
                    A Mirror não segue tendências passageiras.<br />
                    Aqui, o luxo está na escolha certa, no equilíbrio preciso e na honestidade olfativa.
                  </p>
                  <p className="italic font-medium text-foreground/80">
                    Presença não se explica, se sente.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Nossos <span className="text-gradient-gold">Valores</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Qualidade',
                  description: 'Ingredientes premium selecionados para cada fragrância.',
                },
                {
                  icon: Heart,
                  title: 'Paixão',
                  description: 'Dedicação em cada detalhe, da formulação à entrega.',
                },
                {
                  icon: Award,
                  title: 'Excelência',
                  description: 'Compromisso com os mais altos padrões do mercado.',
                },
                {
                  icon: Users,
                  title: 'Cliente em Primeiro',
                  description: 'Sua satisfação é nossa maior prioridade.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5000+', label: 'Clientes Satisfeitos' },
                { number: '20+', label: 'Fragrâncias' },
                { number: '4.9', label: 'Avaliação Média' },
                { number: '24h', label: 'Alta Fixação' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
