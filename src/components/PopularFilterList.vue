<template>
  <div class="space-x-6">
    <button v-for="filter in filterList" :key="filter.id" :class="{'font-bold': filter.isActive}">
      {{ filter.text }}
    </button>
  </div>
</template>

<script lang="ts" setup>
// ref
import { ref } from 'vue'

const filterList = ref([
  {
    id: 'all',
    text: 'All',
    isActive: true
  },
  {
    id: 'milks-dairies',
    text: 'Milks & Dairies',
    isActive: false
  },
  {
    id: 'coffees-teas',
    text: 'Coffees & Teas',
    isActive: false
  },
  {
    id: 'pet-foods',
    text: 'Pet Foods',
    isActive: false
  },
  {
    id: 'meats',
    text: 'Meats',
    isActive: false
  },
  {
    id: 'vegetables',
    text: 'Vegetables',
    isActive: false
  },
  {
    id: 'fruits',
    text: 'Fruits',
    isActive: false
  }
])
</script>
