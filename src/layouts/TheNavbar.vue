import BrowseButton from '@/components/BrowseButton.vue';

<template>
  <nav class="mx-40 h-[70px] my-3 flex items-center justify-between">
    <div class="flex items-center">
      <BrowseButton />

      <ul class="flex justify-between space-x-10 ml-10 font-bold">
        <li class="flex space-x-1.5">
          <IconFlame />
          <span>Hot Deals</span>
        </li>
        <li>Home</li>
        <li class="flex items-center">
          <span class="mr-1.5">Food</span>
          <IconArrowDown :fill="'#7E7E7E'" />
        </li>
        <li>Vegetables</li>
        <li>Drink</li>
        <li>Cookies</li>
        <li class="flex items-center">
          <span class="mr-1.5">Meat & Seafood</span>
          <IconArrowDown :fill="'#7E7E7E'" />
        </li>
        <li>Bakery</li>
      </ul>
    </div>

    <div class="flex items-center space-x-3">
      <IconHeadset :width="36" :height="36" :fill="'#253D4E'" />
      <p class="flex flex-col">
        <span class="text-green-750 font-bold text-3xl">1900-8888</span>
        <span class="text-gray-450 text-xs">24/7 Support Center</span>
      </p>
    </div>

  </nav>
</template>

<script lang="ts" setup>
// custom components
import BrowseButton from '@/components/BrowseButton.vue'


// icons
import IconFlame from '@/components/icons/IconFlame.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import IconHeadset from '@/components/icons/IconHeadset.vue';
</script>
