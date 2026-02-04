import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ShopifyProductCard } from '@/components/ShopifyProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2, PackageX } from 'lucide-react';

const Catalogo = () => {
  const { products, isLoading, error } = useShopifyProducts(50);

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                Nosso <span className="text-gradient-gold">Catálogo</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa coleção completa de fragrâncias premium. 
                Cada perfume é cuidadosamente elaborado para refletir sua essência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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
                <p className="text-muted-foreground">
                  Os produtos serão exibidos aqui assim que forem adicionados à loja Shopify.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {products.map((product, index) => (
                  <ShopifyProductCard key={product.node.id} product={product} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
