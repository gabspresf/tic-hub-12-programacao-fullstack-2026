import { Category } from "./category.model";

interface IProduct {
    id:number;
    name:string;
    price:number;
    category:Category;
}

export class Product implements IProduct {
    constructor(
        public id:number,
        public name:string,
        public price:number,
        public category:Category
){}

}