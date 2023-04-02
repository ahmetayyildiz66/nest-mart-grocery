<template>
  <div class="mx-40 mt-20 flex space-x-6">
    <div class="w-[512px] h-[300px] bg-gray-950 relative">
      <h3 class="text-gray-600 text-2xl font-bold max-w-[270px] z-10 absolute top-20 left-11">Everyday Fresh & Clean with Our Products</h3>
      <ShopButton text="Shop now" :is-primary="true" />
      <img src="../assets/freshProducts.png" alt="Fresh Products" class="absolute right-0 bottom-0" />
    </div>

    <div class="w-[512px] h-[300px] bg-pink-75 relative">
      <h3 class="text-gray-600 text-2xl font-bold max-w-[270px] z-10 absolute top-20 left-11">Everyday Fresh & Clean with Our Products</h3>
      <ShopButton text="Shop now" :is-primary="true" />
      <img src="../assets/breakfast.png" alt="Fresh Products" class="absolute right-0 bottom-0" />
    </div>

    <div class="w-[512px] h-[300px] bg-blue-100 relative">
      <h3 class="text-gray-600 text-2xl font-bold max-w-[270px] z-10 absolute top-20 left-11">Everyday Fresh & Clean with Our Products</h3>
      <ShopButton text="Shop now" :is-primary="false" />
      <img src="../assets/organic.png" alt="Fresh Products" class="absolute right-0 bottom-0" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ShopButton from './ShopButton.vue';
</script>