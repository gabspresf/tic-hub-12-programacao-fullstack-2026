<script lang="ts">
import type { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
  emits: ['onClick'],
  methods: {
    addItem(product: Product) {
      this.$emit('onClick', product)
    },
  },
})
</script>
<template>
  <PCard :style="{ width: '100%', minWidth: '200px', maxWidth: '220px' }">
    <template #header>
      <img alt="Imagem do produto" src="https://picsum.photos/200" class="w-full object cover" />
    </template>
    <template #title>
      <h1>{{ product?.name }}</h1>
    </template>
    <template #content>
      <p>{{ product?.category }}</p>
      <p>R$: {{ product?.price.toFixed(2) }}</p>
    </template>
    <template #footer>
      <PButton @click="addItem(product!)">Adicionar</PButton>
    </template>
  </PCard>
</template>
