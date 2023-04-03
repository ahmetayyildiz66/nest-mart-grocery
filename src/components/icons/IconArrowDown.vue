<template>
  <svg width="11" height="6" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.29297 5.64386C5.0972 5.6442 4.90329 5.60585 4.72238 5.531C4.54148 5.45616 4.37715 5.3463 4.23885 5.20775L0.292969 1.26112L1.34709 0.207001L5.29297 4.15288L9.23885 0.207001L10.293 1.26112L6.34709 5.207C6.20884 5.34569 6.04454 5.45569 5.86364 5.53066C5.68273 5.60563 5.48879 5.6441 5.29297 5.64386Z" :fill="props.fill"/>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  fill?: string
}

const props = defineProps<Props>()
</script>