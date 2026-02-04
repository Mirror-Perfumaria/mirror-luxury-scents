import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Minus, Plus, Loader2, Clock, Droplets, Package } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useShopifyProduct } from '@/hooks/useShopifyProducts';
import { useCartStore } from '@/stores/cartStore';
import { formatPrice } from '@/lib/shopify';

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, isLoading: productLoading, error } = useShopifyProduct(slug);
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (productLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !product) {
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

  const selectedVariant = product.variants.edges[selectedVariantIndex]?.node;
  const firstImage = product.images.edges[0]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

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
              {firstImage ? (
                <img
                  src={firstImage.url}
                  alt={firstImage.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Sem imagem
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-display font-bold text-primary">
                  {selectedVariant && formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description || 'Fragrância premium desenvolvida com ingredientes de alta qualidade.'}
              </p>

              {/* Variant Options */}
              {product.options.length > 0 && product.options[0].name !== 'Title' && (
                <div className="mb-8">
                  {product.options.map((option) => (
                    <div key={option.name} className="mb-4">
                      <p className="text-sm font-medium mb-2">{option.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.edges.map((variant, index) => (
                          <button
                            key={variant.node.id}
                            onClick={() => setSelectedVariantIndex(index)}
                            className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                              selectedVariantIndex === index
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border hover:border-primary/50'
                            }`}
                            disabled={!variant.node.availableForSale}
                          >
                            {variant.node.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Fixação</p>
                  <p className="text-sm font-medium">Até 24h</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Droplets className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Volume</p>
                  <p className="text-sm font-medium">100ml</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border text-center">
                  <Package className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground">Tipo</p>
                  <p className="text-sm font-medium">Inspirado</p>
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
                  <Button 
                    onClick={handleAddToCart} 
                    className="flex-1" 
                    size="lg"
                    disabled={cartLoading || !selectedVariant?.availableForSale}
                  >
                    {cartLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Adicionar ao Carrinho
                      </>
                    )}
                  </Button>
                </div>
                {selectedVariant && !selectedVariant.availableForSale && (
                  <p className="text-sm text-destructive text-center">Produto esgotado</p>
                )}
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
