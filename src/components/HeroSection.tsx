import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-perfume-final.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center min-h-screen">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-[55%] py-20 lg:py-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest uppercase mb-4"
            >
              Mirror Perfumaria
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-hero text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Perfumes que{' '}
              <span className="text-gradient-gold">refletem</span>{' '}
              sua essência
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Fragrâncias autorais com alta fixação e ingredientes 100% orgânicos. 
              Descubra o perfume que define quem você é.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/catalogo">
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sobre">Sobre Nós</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 inset-y-0 w-[50%] lg:w-[45%] hidden md:block"
      >
        <div className="relative h-full w-full">
          {/* Gradient overlays for seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60 z-10 pointer-events-none" />
          <img
            src={heroImage}
            alt="Perfume Mirror Apolo"
            className="h-full w-full object-cover object-[center_50%]"
          />
        </div>
      </motion.div>

      {/* Mobile Image - Below text on small screens */}
      <div className="absolute inset-0 md:hidden -z-10">
        <img
          src={heroImage}
          alt="Perfume Mirror"
          className="w-full h-full object-cover object-[70%_center] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
