
import IconArrowDown from './icons/IconArrowDown.vue';

<template>
  <div class="bg-slate-100 px-5 rounded-md flex items-center w-[700px]">
    <button class="text-sm font-bold flex items-center">
      <span>All Categories</span>
      <IconArrowDown class="mx-3.5" />
    </button>
    <IconSeparator class="mr-3.5" />
    <input type="text" class="h-12 w-[485px] bg-transparent text-xs focus:outline-none" placeholder="Search for items" />
    <IconSearch />
  </div>
</template>

<script lang="ts" setup>
import IconArrowDown from './icons/IconArrowDown.vue';
import IconSeparator from "./icons/IconSeparator.vue"
import IconSearch from "./icons/IconSearch.vue"
</script>