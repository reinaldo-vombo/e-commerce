export interface CartItem extends Product {
  quantity: number;
}
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}
