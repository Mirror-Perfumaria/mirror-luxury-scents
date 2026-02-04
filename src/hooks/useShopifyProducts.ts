import { useState, useEffect } from 'react';
import { ShopifyProduct, fetchProducts, fetchProductByHandle } from '@/lib/shopify';

export function useShopifyProducts(limit: number = 50, query?: string) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(limit, query);
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar produtos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [limit, query]);

  return { products, isLoading, error };
}

export function useShopifyProduct(handle: string | undefined) {
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) {
      setIsLoading(false);
      return;
    }

    const loadProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
      } catch (err) {
        setError('Erro ao carregar produto');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  return { product, isLoading, error };
}
