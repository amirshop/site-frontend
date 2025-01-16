export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryModel;
  image: string;
  rating: RatingModel;
}

export enum CategoryModel {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface RatingModel {
  rate: number;
  count: number;
}
