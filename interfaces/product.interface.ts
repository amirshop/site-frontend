export interface ProductInterface {
  _id: string;
  title: string;
  slug: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
}
