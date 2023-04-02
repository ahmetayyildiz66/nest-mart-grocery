<template>
  <div v-for="comp in componentsArr" :key="comp.key" class="flex flex-col items-center justify-center bg-gray-100 h-[220px] w-[180px] rounded-lg">
    <component :is="comp.is" v-bind="comp.props" />
    <span class="mt-6 max-w-[80px] text-center ">{{ comp.props.title }}</span>
  </div>
</template>

<script lang="ts">
import * as components from './icons/icons'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'render-components',
  components: {
    ...components
  },
  props: {
    componentsArr: {
      type: Object,
      default: undefined
    }
  },
})
</script>
