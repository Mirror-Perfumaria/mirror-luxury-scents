import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: '100% Orgânico',
    description: 'Ingredientes naturais selecionados para uma experiência única.',
  },
  {
    icon: Shield,
    title: 'Seguro para a Pele',
    description: 'Formulações testadas e aprovadas para todos os tipos de pele.',
  },
  {
    icon: Clock,
    title: 'Alta Fixação',
    description: 'Fragrâncias duradouras com até 24 horas de permanência.',
  },
  {
    icon: Gift,
    title: 'Devolução Garantida',
    description: 'Não ficou satisfeito? Devolvemos seu dinheiro em até 30 dias.',
  },
];

export const BenefitsSection = () => {
  return (
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
            Por que escolher a <span className="text-gradient-gold">Mirror</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qualidade premium com compromisso de excelência em cada detalhe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
