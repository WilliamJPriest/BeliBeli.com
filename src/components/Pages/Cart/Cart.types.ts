export interface CartProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  img: string;
  artNo: string;
  color: string;
  size: string;
  quantity: number;
}

export interface CartProductProps {
  item: CartProduct;
  index: number;
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export interface handleQuantityChange {
  index: number;
  newQuantity: number;
}
