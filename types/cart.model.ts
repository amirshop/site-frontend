export interface CartModel {
  id: number;
  userId: number;
  date: number;
  products: ProductInCartModel[];
}

export interface ProductInCartModel {
  productId: number;
  quantity: number;
}
