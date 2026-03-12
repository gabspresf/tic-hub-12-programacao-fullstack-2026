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
        this.items.forEach(item => {
            total += item.quantity;
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