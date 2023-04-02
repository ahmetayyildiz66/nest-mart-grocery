<template>
  <section class="mx-40 rounded-3xl relative">
    <img src="../assets/carousel.png" class="flex w-full" alt="Market" />
    <h1 class="text-7xl absolute top-1 max-w-[765px] ml-24 mt-24 font-bold text-gray-700">
      Don't miss amazing grocery deals
    </h1>
    <div class="absolute top-[390px] ml-24">
      <MailSubscribe />
    </div>
  </section>
</template>

<script lang="ts" setup>
import MailSubscribe from './MailSubscribe.vue'
</script>
