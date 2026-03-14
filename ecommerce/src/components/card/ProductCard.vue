<template>
  <article>
    <h1>{{ product?.name }}</h1>
    <p>{{ product?.category }}</p>
    <p>R$: {{ product?.price.toFixed(2) }}</p>
    <button @click="addItem(product!)">Adicionar</button>
  </article>
</template>
<script lang="ts">
import type { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
  // vai emitir informações para o "pai"
  emits: ['onClick'],
  methods: {
    addItem(product: Product) {
      this.$emit('onClick', product)
    },
  },
})
</script>
