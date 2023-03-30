<template>
  <header class="h-32 mx-40 flex items-center justify-between">
    <img src="@/assets/logo.png"  alt="Nest Mart Logo"/>
    <SearchableDropdown />
    <ShoppingInfo />
  </header>
</template>

<script lang="ts" setup>
import SearchableDropdown from '@/components/SearchableDropdown.vue';
import ShoppingInfo from '@/components/ShoppingInfo.vue';
</script>