import type { Product } from './product.model'
interface CartItem {
  product: Product
  quantity: number
}
export class Cart {
  constructor(
    public list: CartItem[] = [], // indica que o carrinho começa com uma lista vazia, só vai aceitar itens que sigam o modelo acima
    public total: number = 0, // O contador começa em zero
  ) {}
}
