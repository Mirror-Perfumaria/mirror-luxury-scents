import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export const ShopifyCartDrawer = () => {
  const { 
    items, 
    isLoading, 
    isSyncing, 
    updateQuantity, 
    removeItem, 
    getCheckoutUrl, 
    syncCart,
    isCartOpen,
    setIsCartOpen
  } = useCartStore();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);
  const currencyCode = items[0]?.price.currencyCode || 'BRL';

  useEffect(() => { 
    if (isCartOpen) syncCart(); 
  }, [isCartOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsCartOpen(false);
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-2xl">Carrinho</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Seu carrinho está vazio" : `${totalItems} item${totalItems !== 1 ? 's' : ''} no carrinho`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Seu carrinho está vazio</p>
                <p className="text-sm text-muted-foreground mt-2">Adicione produtos para continuar</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.variantId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 p-3 rounded-lg bg-card border border-border"
                    >
                      <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img 
                            src={item.product.node.images.edges[0].node.url} 
                            alt={item.product.node.title} 
                            className="w-full h-full object-cover" 
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{item.product.node.title}</h4>
                        {item.selectedOptions.length > 0 && item.selectedOptions[0].value !== 'Default Title' && (
                          <p className="text-sm text-muted-foreground">
                            {item.selectedOptions.map(opt => opt.value).join(' • ')}
                          </p>
                        )}
                        <p className="font-semibold text-primary mt-1">
                          {formatPrice(item.price.amount, item.price.currencyCode)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.variantId)}
                          disabled={isLoading}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-1">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7" 
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            disabled={isLoading}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7" 
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            disabled={isLoading}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="flex-shrink-0 space-y-4 pt-4 border-t border-border bg-background">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-display font-bold text-primary">
                    {formatPrice(totalPrice.toString(), currencyCode)}
                  </span>
                </div>
                <Button 
                  onClick={handleCheckout} 
                  className="w-full" 
                  size="lg" 
                  disabled={items.length === 0 || isLoading || isSyncing}
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Finalizar Compra
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Você será redirecionado para o checkout seguro do Shopify
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
