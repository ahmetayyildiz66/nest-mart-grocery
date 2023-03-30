<template>
  <header class="h-32 mx-40 flex items-center">
    <img src="@/assets/logo.png"  alt="Nest Mart Logo"/>
    <SearchableDropdown />
  </header>
</template>

<script lang="ts" setup>
import SearchableDropdown from '@/components/SearchableDropdown.vue';
</script>