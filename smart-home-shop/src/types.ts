export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  description?: string;
  oldPrice?: number;
  discount?: number;
  image: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  colors?: string[];
};