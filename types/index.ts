export interface ProductImage {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails?: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: ProductImage[];
  video?: string;
  stock: number;
  discount: number;
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  date?: string;
  readTime?: string;
  author?: string;
}
