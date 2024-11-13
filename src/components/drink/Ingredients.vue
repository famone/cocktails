<template>
  <ul>
    <li
      v-for="(item, index) in ingredients"
      :key="index"
      class="text-sm"
    >
      <div
        class="flex items-end"
      >
        <span class="flex-shrink-0 ">{{ item.ingredient }}</span>
        <span class="w-full border-b-2 border-dotted" />
        <span
          v-if="item.measure"
          class="flex-shrink-0 "
        >{{ item.measure }}</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IngredientsType } from '~/src/types/drinks'

type Props = {
  ingredients: IngredientsType[]
}

const { ingredients } = defineProps<Props>()
</script>

<style scoped>

</style>
