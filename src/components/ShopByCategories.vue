<template>
  <section class="mx-40 mt-16">
    <h2 class="text-3xl font-semibold">Shop by Categories</h2>
    <div class="flex space-x-6 mt-10 mb-5">
      <RenderComponents :components-arr="DynamicComponents" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { DynamicComponents } from './DynamicComponents';

import RenderComponents from './RenderComponents.vue';

</script>
