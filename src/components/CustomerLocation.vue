<template>
  <div class="h-10 border rounded-md px-3.5 py-3 text-sm text-green-750 flex items-center">
    <IconLocation />
    <span class="mx-2">Your Location</span>
    <IconArrowDown />
  </div>
</template>

<script setup lang="ts">
import IconLocation from './icons/IconLocation.vue';
import IconArrowDown from './icons/IconArrowDown.vue';
</script>