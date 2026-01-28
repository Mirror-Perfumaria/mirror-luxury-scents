import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Simplesmente apaixonada pelo La Belle! A fixação é impressionante e recebo elogios o dia todo. Melhor custo-benefício que já encontrei.',
    product: 'La Belle',
  },
  {
    name: 'Carlos Eduardo',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'O Special Tabaco é incrível! Elegante, marcante e com uma duração absurda. Já é meu perfume favorito para ocasiões especiais.',
    product: 'Special Tabaco',
  },
  {
    name: 'Ana Carolina',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Qualidade excepcional! A embalagem é linda e o perfume é exatamente como descrito. Super recomendo a Mirror Perfumaria.',
    product: 'Oud Royal',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes <span className="text-gradient-gold">dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milhares de clientes satisfeitos em todo o Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-primary mt-1">Comprou: {testimonial.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
