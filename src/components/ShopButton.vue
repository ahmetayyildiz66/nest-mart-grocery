<template>
  <button
    :class="{ ['bg-green-750']: isPrimary, ['bg-orange-350']: !isPrimary }"
    class="text-white px-4 py-2 text-sm rounded-[3px] flex items-center absolute bottom-16 z-10 ml-11"
  >
    <span class="mr-2.5">{{ text }}</span>
      <IconArrowRight />
  </button>
</template>

<script lang="ts" setup>
import IconArrowRight from '../components/icons/IconArrowRight.vue'

interface Props {
  text: string
  isPrimary: boolean
}

const props = defineProps<Props>()
</script>
