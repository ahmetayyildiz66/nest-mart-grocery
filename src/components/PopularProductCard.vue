<template>
  <div class="w-[280px] h-[400px] border rounded-xl p-5 pt-0 shadow-md flex flex-col justify-center">
    <img :src="images[0]" :alt="title" class="object-fit mt-14 h-[200px] mx-auto" />
    <h4 class="text-sm font-bold leading-5 mt-5 h-10">{{ title }}</h4>
    <p class="text-gray-450 text-sm mt-3">{{ weight }} gram</p>
    <p class="mt-3">
      <span class="text-green-750 font-bold text-xl">${{ price }}</span>
      <span class="text-gray-450 text-sm ml-1 line-through" v-if="price !== discountPrice">${{ discountPrice.toFixed(2) }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
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
