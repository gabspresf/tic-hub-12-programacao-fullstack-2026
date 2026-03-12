import { Product } from "./product.model";

interface ICartItem {
    product:Product;
    quantity:number;
}

export class Cart {

    private items: ICartItem [] = [];

    addItem(product:Product, quantity:number): void {
        const itemExistente = this.items.find(item => item.product.id === product.id);
        
        if (itemExistente){
            itemExistente.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    getTotalItems():number {
        let total = 0;
        this.items.forEach(item=> {
            total += item.quantity
        });
        return total;
    }

    getFinalPrice():number {
        let finalPrice = 0;
        this.items.forEach(item => {
            finalPrice += item.product.price * item.quantity;
        });
        return finalPrice;
    }
}

// "para cada item que eu pegar, some a quantidade dele no meu total"

// forEach: para cada item, pegamos a quantidade e somamos no total
// não basta somar o preço do produto, tem que multiplicar pela quantidade que o usuário escolheu