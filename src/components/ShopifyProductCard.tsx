import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Loader2 } from 'lucide-react';
import { ShopifyProduct, formatPrice } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
  index?: number;
}

export const ShopifyProductCard = ({ product, index = 0 }: ShopifyProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  const { node } = product;
  const firstImage = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) return;
    
    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/produto/${node.handle}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-muted">
            {firstImage ? (
              <img
                src={firstImage.url}
                alt={firstImage.altText || node.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Sem imagem
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full gap-2"
              size="sm"
              disabled={isLoading || !firstVariant?.availableForSale}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {node.title}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wide line-clamp-1">
            {node.description?.substring(0, 50) || 'Perfume'}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary">
              {formatPrice(price.amount, price.currencyCode)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
