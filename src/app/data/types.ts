export interface Product {
  id: string;
  handle: string;
  title: string;
  price: number;
  compareAtPrice?: number | null;
  images: string[];
  tags?: string[];
  collectionHandles?: string[];
}

export interface Collection {
  handle: string;
  title: string;
  description?: string;
  image?: string;
}
