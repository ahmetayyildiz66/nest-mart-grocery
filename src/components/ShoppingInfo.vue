<template>
  <div class="flex">
    <CustomerLocation />

    <button class="flex items-center ml-11">
      <IconUsers />
      <span class="text-gray-450 mt-2 ml-1">Account</span>
    </button>

    <button class="flex items-center mx-5 relative">
      <IconHeart />
      <span class="text-gray-450 mt-2 ml-3">Wishlist</span>
      <IconBaget class="absolute top-1 left-4" />
      <span class="absolute top-[6px] left-[23px] text-xs text-white">4</span>
    </button>

    <button class="flex items-center relative">
      <IconCart />
      <span class="text-gray-450 mt-2 ml-3">Cart</span>
      <IconBaget class="absolute top-1 left-4" />
      <span class="absolute top-[6px] left-1/3 text-xs text-white">4</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
// custom components
import CustomerLocation from '@/components/CustomerLocation.vue';

// icon components
import IconUsers from './icons/IconUsers.vue';
import IconHeart from './icons/IconHeart.vue';
import IconCart from './icons/IconCart.vue';
import IconBaget from './icons/IconBaget.vue';

</script>