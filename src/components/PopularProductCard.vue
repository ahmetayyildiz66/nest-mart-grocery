<template>
  <div
    class="w-[280px] h-[400px] border rounded-xl p-5 pt-0 shadow-md flex flex-col justify-center relative hover:cursor-pointer"
  >
    <img :src="images[0]" :alt="title" class="object-cover mt-14 h-[180px] mx-auto" />
    <h4 class="text-sm font-bold leading-5 mt-5 h-10">{{ title }}</h4>

    <div class="flex items-center space-x-1 mt-2">
      <IconFullStar v-for="n in Math.floor(rating)" :key="n" />
      <IconEmptyStart v-for="n in 5 - Math.floor(rating)" :key="n" />
      <span class="text-gray-450 text-sm">({{ rating }})</span>
    </div>

    <p class="text-gray-450 text-sm mt-2">{{ weight }} gram</p>

    <div class="flex items-center justify-between">
      <p class="mt-2">
        <span class="text-green-750 font-bold text-xl">${{ price }}</span>
        <span class="text-gray-450 text-sm ml-1 line-through" v-if="price !== discountPrice"
          >${{ discountPrice.toFixed(2) }}</span
        >
      </p>
      <AddProduct />
    </div>

    <DiscountBanner v-if="price !== discountPrice" :discount-amount="discountAmount" />

  </div>
</template>

<script lang="ts" setup>
// computed
import { computed } from 'vue'

const discountAmount = computed(() => {
  return Number((((props.price - props.discountPrice) / props.price) * 100).toFixed(0))
})

import DiscountBanner from './DiscountBanner.vue'
import AddProduct from './AddProduct.vue'
import IconFullStar from './icons/IconFullStar.vue'
import IconEmptyStart from './icons/IconEmptyStar.vue'

interface Props {
  title: string
  price: number
  discountPrice: number
  weight: number
  rating: number
  images: string[]
}

const props = defineProps<Props>()
</script>
