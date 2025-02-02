export interface CartInterface {
  id: number;
  userId: number;
  date: number;
  products: ProductInCartInterface[];
}

export interface ProductInCartInterface {
  productId: number;
  quantity: number;
}
