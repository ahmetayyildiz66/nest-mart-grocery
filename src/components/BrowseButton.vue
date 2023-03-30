<template>
  <button class="h-11 bg-green-750 px-4 py-3.5 flex items-center rounded-md text-white">
    <IconApps />
    <span class="mx-2.5">Browse All Categories</span>
    <IconArrowDown :fill="'#fff'"/>
  </button>
</template>

<script lang="ts" setup>
import IconApps from './icons/IconApps.vue';
import IconArrowDown from './icons/IconArrowDown.vue';

</script>