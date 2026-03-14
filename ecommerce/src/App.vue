<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Guitarra', 200, 'Instrument'),
        new Product(2, 'Guitarra2', 200, 'Instrument'),
      ],
    }
  },

  methods: {
    addToCard(product: Product) {
      const existItem = this.cart.list.some((item) => item.product.name === product.name)

      if (existItem) {
        this.cart.list = this.cart.list.map((item) => {
          if (item.product.name === product.name) {
            return {
              product: item.product,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      } else {
        this.cart.list.push({ product, quantity: 1 })
      }
      this.cart.total += 1
    },
    decItem() {
      this.cart.total -= 1
    },
    finalPrice() {
      // preço final
      return this.cart.list.reduce((soma, item) => {
        return soma + item.product.price * item.quantity
      }, 0)
    },
  },
  components: { ProductCard },
}
</script>

<template>
  <main>
    <ProductCard
      v-for="product in products"
      :key="product.name"
      :product="product"
      @on-click="addToCard"
    />
  </main>
  <div>
    <h1>Carrinho</h1>
    <div v-for="item in cart.list" :key="item.product.name">
      <h1>{{ item.product.name }}</h1>
      <p>{{ item.quantity }}</p>
    </div>
    <p>total: {{ cart.total }}</p>
    <p>R$ {{ finalPrice().toFixed() }}</p>
  </div>
</template>
