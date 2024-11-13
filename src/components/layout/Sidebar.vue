<template>
  <div class="md:sticky md:top-4 bg-gray-100 md:min-h-[50vh] rounded-2xl p-4 flex flex-col justify-between">
    <ul class="space-y-1">
      <li
        v-for="(item, index) in navs"
        :key="index"
      >
        <nuxt-link
          :to="item.slug ? `/drinks/${item.slug}` : '/'"
          class="block p-2 rounded-lg text-black transition-all hover:bg-gray-200 text-lg font-semibold"
          active-class="!bg-violet-200 !text-violet-600"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <p class="text-violet-500 text-sm text-center">
      Designed by <a
        href="https://github.com/famone"
        target="_blank"
        class="underline"
      >famzayka</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useNavs } from '~/src/composables/useNav'

const { navs } = useNavs()
</script>

<style scoped>

</style>
