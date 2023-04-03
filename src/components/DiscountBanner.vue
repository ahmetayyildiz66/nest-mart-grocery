<template>
  <span
    class="bg-green-750 w-14 text-white h-8 absolute text-sm flex items-center justify-center left-0 top-[30px] rounded-r-3xl"
    >-{{ discountAmount }}%</span
  >
</template>

<script lang="ts" setup>
interface Prop {
  discountAmount: number
}

defineProps<Prop>()
</script>
