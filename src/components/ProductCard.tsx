import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/produto/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
          {/* Badge */}
          {product.onSale && (
            <div className="absolute top-3 left-3 z-10">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                OFERTA
              </span>
            </div>
          )}

          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full gap-2"
              size="sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Adicionar
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.category}
          </p>
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-lg font-semibold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
