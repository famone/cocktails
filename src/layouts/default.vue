<template>
  <div class="container mx-auto px-4 md:px-0 my-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-3">
        <LayoutSidebar />
      </div>
      <div class="col-span-12 md:col-span-9">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
