import { Category } from "./model/category.model";
import { Product } from "./model/product.model";
import { User } from "./model/user.model";
import { Cart } from "./model/cart.model";

const category = new Category(1, 'Instrument');
const product = new Product(2, 'Guitarra', 400, category);
const user1 = new User(3, 'gabspf', 'gabiprestes@gmail.com', 'ADMIN');
const user2 = new User(4, 'maripf', 'mariprestes@gmail.com', 'CUSTOMER');
const cart = new Cart();

cart.addItem(product, 2);
cart.addItem(product, 2);

console.log("=== ATIVIDADE 1 | Aula 2 | Typescript ===");

// 1. Gerenciamento de Usuários (Roles)
console.log("\n--- Usuários Cadastrados ---");
console.log(`Admin: ${user1.username} | Role: ${user1.role}`);
console.log(`Cliente: ${user2.username} | Role: ${user2.role}`);

// 2. Lógica do Carrinho (Cart)
console.log("\n--- Resumo do Carrinho ---");
console.log("Total de unidades (acumuladas):", cart.getTotalItems());
console.log("Valor final da compra: R$", cart.getFinalPrice());

// 3. Verificação da Lógica de Acúmulo
console.log("\n--- Conteúdo do carrinho ---");
console.log(cart);