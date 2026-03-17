<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import InputNumber from 'primevue/inputnumber'
export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Guitarra', 200, 'Instrument'),
        new Product(2, 'Bateria', 200, 'Instrument'),
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

    onRemoveItem(product: Product) {
      const item = this.cart.list.find((i) => i.product.name === product.name)

      if (item) {
        this.cart.total -= 1

        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          const index = this.cart.list.indexOf(item)
          this.cart.list.splice(index, 1)
        }
      }
    },
    decItem() {
      this.cart.total -= 1
    },
    finalPrice() {
      return this.cart.list.reduce((soma, item) => {
        return soma + item.product.price * item.quantity
      }, 0)
    },
  },
  components: { ProductCard },
  InputNumber,
}
</script>

<template>
  <div class="flex gap-4 p-5">
    <main class="flex-1">
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in products"
          :key="product.name"
          :product="product"
          @on-click="addToCard"
        />
      </section>
    </main>

    <div class="w-80 flex flex-col gap-4">
      <h1>Carrinho</h1>

      <div v-if="cart.list.length > 0" class="flex flex-col gap-4">
        <div v-for="item in cart.list" :key="item.product.name">
          <PCard>
            <template #content>
              <div class="flex flex-row gap-2">
                <img alt="Imagem do produto" src="https://picsum.photos/200" class="w-full" />
                <h3>{{ item.product.name }}</h3>
              </div>
              <p>
                Qtd:
                <InputNumber
                  v-model="item.quantity"
                  showButtons
                  buttonLayout="horizontal"
                  :min="1"
                  class="w-full flex"
                  inputClass="w-full text-center"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                />
              </p>
            </template>
            <template #footer>
              <PButton
                icon="pi pi-trash"
                label="Deletar"
                severity="danger"
                @click="onRemoveItem(item.product)"
              />
            </template>
          </PCard>
        </div>
        <p>Total: R$ {{ finalPrice().toFixed(2) }}</p>
      </div>

      <div
        v-else
        class="text-gray-500 py-10 text-center border border-dashed border-gray-700 rounded"
      >
        Não existem itens no carrinho. Vamos comprar?
      </div>
    </div>
  </div>
</template>
