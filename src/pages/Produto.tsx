import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Minus, Plus, Clock, Droplets, Package } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/catalogo">Voltar ao Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-2xl overflow-hidden bg-card"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
                {product.category}
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-3xl font-display font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Fixação</p>
                  <p className="text-sm font-medium">{product.fixation}</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Droplets className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Volume</p>
                  <p className="text-sm font-medium">{product.volume}</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Package className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Inspiração</p>
                  <p className="text-sm font-medium truncate">{product.inspiration.split(' - ')[0]}</p>
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold mb-4">Pirâmide Olfativa</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-xs text-primary font-medium uppercase mb-1">Notas de Topo</p>
                    <p className="text-sm text-foreground">{product.notes.top.join(', ')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-xs text-primary font-medium uppercase mb-1">Notas de Coração</p>
                    <p className="text-sm text-foreground">{product.notes.heart.join(', ')}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-xs text-primary font-medium uppercase mb-1">Notas de Fundo</p>
                    <p className="text-sm text-foreground">{product.notes.base.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button onClick={handleAddToCart} className="flex-1" size="lg">
                    <ShoppingBag className="w-5 h-5" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Produto;
