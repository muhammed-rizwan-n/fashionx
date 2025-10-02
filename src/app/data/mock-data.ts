import { Collection, Product } from './types';

export const collections: Collection[] = [
  {
    handle: 'new-arrivals',
    title: 'New Arrivals',
    image:
      'https://images.unsplash.com/photo-1520975922215-230f6c1d5b21?q=80&w=1400&auto=format&fit=crop',
  },
  {
    handle: 'dresses',
    title: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1556909114-74e40de46b6a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    handle: 'tops',
    title: 'Tops',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
  },
  {
    handle: 'bottoms',
    title: 'Bottoms',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    handle: 'accessories',
    title: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?q=80&w=1400&auto=format&fit=crop',
  },
];

export const products: Product[] = [
  {
    id: 'p1',
    handle: 'linen-midi-dress',
    title: 'Linen Midi Dress',
    price: 89.0,
    compareAtPrice: 119.0,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['new', 'dress'],
    collectionHandles: ['new-arrivals', 'dresses'],
  },
  {
    id: 'p2',
    handle: 'silk-wrap-top',
    title: 'Silk Wrap Top',
    price: 69.0,
    images: [
      'https://images.unsplash.com/photo-1556909114-74e40de46b6a?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975922215-230f6c1d5b21?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['top'],
    collectionHandles: ['new-arrivals', 'tops'],
  },
  {
    id: 'p3',
    handle: 'tailored-trouser',
    title: 'Tailored Trouser',
    price: 79.0,
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['bottom'],
    collectionHandles: ['bottoms'],
  },
  {
    id: 'p4',
    handle: 'classic-leather-belt',
    title: 'Classic Leather Belt',
    price: 49.0,
    images: [
      'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['accessory'],
    collectionHandles: ['accessories'],
  },
  {
    id: 'p5',
    handle: 'summer-linen-set',
    title: 'Summer Linen Set',
    price: 129.0,
    compareAtPrice: 159.0,
    images: [
      'https://images.unsplash.com/photo-1506111583091-a24b6ad64dc1?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['set', 'new'],
    collectionHandles: ['new-arrivals', 'tops', 'bottoms'],
  },
  {
    id: 'p6',
    handle: 'wrap-satin-skirt',
    title: 'Wrap Satin Skirt',
    price: 74.0,
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    ],
    tags: ['skirt', 'bottom'],
    collectionHandles: ['bottoms'],
  },
];
