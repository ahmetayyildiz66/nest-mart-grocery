<template>
  <div class="relative">
    <input type="text" placeholder="Your email address" class="w-[440px] h-12 bg-gray-100 text-xs pl-14 rounded-full relative" />
    <IconPaperPlane class="absolute top-[13px] left-5" :width="24" :height="24" :fill="'#7E7E7E'" />
    <button class="bg-green-750 px-9 py-[12px] rounded-full absolute right-0 text-white">Subscribe</button>
  </div>
</template>

<script lang="ts" setup>
import IconPaperPlane from './icons/IconPaperPlane.vue';
</script>