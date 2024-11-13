<template>
  <div>
    <!-- meta for image lazyLoading in nuxt 3 ))) -->
    <NuxtImg
      :src="image"
      :alt="title"
      placeholder="/img/landscape-placeholder.svg"
      class="rounded-lg w-full object-cover"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  image: string
  title?: string
}

const { image, title } = defineProps<Props>()
</script>

<style scoped>

</style>
