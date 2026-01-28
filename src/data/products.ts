export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'masculino' | 'feminino' | 'unissex';
  description: string;
  inspiration: string;
  fixation: string;
  volume: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  featured?: boolean;
  isNew?: boolean;
  onSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Special Tabaco',
    slug: 'special-tabaco',
    price: 120,
    originalPrice: 150,
    image: '/src/assets/perfume-1.jpg',
    category: 'masculino',
    description: 'Uma fragrância marcante e sofisticada que combina a intensidade do tabaco com notas amadeiradas e especiarias. Perfeito para o homem moderno que busca elegância e presença.',
    inspiration: 'Tobacco Vanille - Tom Ford',
    fixation: 'Até 24 horas',
    volume: '100ml',
    notes: {
      top: ['Tabaco', 'Canela', 'Gengibre'],
      heart: ['Baunilha', 'Cacau', 'Frutas Secas'],
      base: ['Madeira de Oud', 'Sândalo', 'Âmbar']
    },
    featured: true,
    onSale: true
  },
  {
    id: '2',
    name: 'La Belle',
    slug: 'la-belle',
    price: 120,
    originalPrice: 150,
    image: '/src/assets/perfume-2.jpg',
    category: 'feminino',
    description: 'Uma fragrância floral e envolvente que celebra a feminilidade em sua forma mais pura. Rosas frescas combinadas com notas doces criam uma aura irresistível.',
    inspiration: 'La Vie Est Belle - Lancôme',
    fixation: 'Até 18 horas',
    volume: '100ml',
    notes: {
      top: ['Rosa', 'Bergamota', 'Pera'],
      heart: ['Íris', 'Jasmin', 'Flor de Laranjeira'],
      base: ['Patchouli', 'Baunilha', 'Praline']
    },
    featured: true,
    onSale: true
  },
  {
    id: '3',
    name: 'Aventure',
    slug: 'aventure',
    price: 150,
    originalPrice: 170,
    image: '/src/assets/perfume-3.jpg',
    category: 'masculino',
    description: 'Uma fragrância cítrica e fresca que evoca aventura e liberdade. Ideal para o homem dinâmico que não tem medo de explorar novos horizontes.',
    inspiration: 'Aventus - Creed',
    fixation: 'Até 20 horas',
    volume: '100ml',
    notes: {
      top: ['Bergamota', 'Limão Siciliano', 'Maçã Verde'],
      heart: ['Abacaxi', 'Groselha Negra', 'Rosa'],
      base: ['Almíscar', 'Carvalho', 'Musgo']
    },
    featured: true,
    onSale: true
  },
  {
    id: '4',
    name: 'Oud Royal',
    slug: 'oud-royal',
    price: 180,
    originalPrice: 220,
    image: '/src/assets/perfume-4.jpg',
    category: 'unissex',
    description: 'Uma fragrância oriental e luxuosa que combina o precioso oud com especiarias exóticas. Para quem busca exclusividade e sofisticação máxima.',
    inspiration: 'Oud Wood - Tom Ford',
    fixation: 'Até 24 horas',
    volume: '100ml',
    notes: {
      top: ['Açafrão', 'Cardamomo', 'Pimenta Rosa'],
      heart: ['Oud', 'Rosa de Taif', 'Incenso'],
      base: ['Sândalo', 'Vetiver', 'Âmbar']
    },
    featured: true,
    onSale: true
  },
  {
    id: '5',
    name: 'Ocean Fresh',
    slug: 'ocean-fresh',
    price: 120,
    originalPrice: 150,
    image: '/src/assets/perfume-5.jpg',
    category: 'masculino',
    description: 'Uma fragrância aquática e revigorante que captura a essência do oceano. Frescor e vitalidade em cada borrifada.',
    inspiration: 'Acqua di Gio - Giorgio Armani',
    fixation: 'Até 16 horas',
    volume: '100ml',
    notes: {
      top: ['Bergamota', 'Neroli', 'Notas Marinhas'],
      heart: ['Jasmin', 'Calone', 'Alecrim'],
      base: ['Cedro', 'Almíscar Branco', 'Âmbar Cinza']
    },
    featured: true,
    onSale: true
  },
  {
    id: '6',
    name: 'Premium Wood',
    slug: 'premium-wood',
    price: 150,
    originalPrice: 180,
    image: '/src/assets/perfume-6.jpg',
    category: 'masculino',
    description: 'Uma fragrância amadeirada e quente que exala masculinidade e confiança. Notas de sândalo e baunilha criam uma aura acolhedora.',
    inspiration: 'Bleu de Chanel',
    fixation: 'Até 20 horas',
    volume: '100ml',
    notes: {
      top: ['Cedro', 'Menta', 'Toranja'],
      heart: ['Sândalo', 'Canela', 'Noz Moscada'],
      base: ['Baunilha', 'Vetiver', 'Almíscar']
    },
    featured: true,
    onSale: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'todos') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
