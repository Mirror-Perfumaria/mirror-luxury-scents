import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2, PackageX } from 'lucide-react';
import { ShopifyProductCard } from '@/components/ShopifyProductCard';
import { Button } from '@/components/ui/button';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';

export const ShopifyFeaturedProducts = () => {
  const { products, isLoading, error } = useShopifyProducts(6);

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
            Os produtos <span className="text-gradient-gold">favoritos</span> de nossos clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra fragrâncias que conquistaram milhares de clientes com sua qualidade incomparável.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-destructive">{error}</p>
          </div>
        ) : products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <PackageX className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-display font-semibold mb-2">Nenhum produto encontrado</h3>
            <p className="text-muted-foreground mb-4">
              Os produtos serão exibidos aqui assim que forem adicionados à loja Shopify.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => (
                <ShopifyProductCard key={product.node.id} product={product} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/catalogo">
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};
