<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in data?.drinks"
      :key="index"
    >
      <DrinkCard :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DrinksRes } from '~/src/types/drinks'

const route = useRoute()

const { data } = await useAsyncData<DrinksRes>('drinks', () => $fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${route.params.drink}`))

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Drink not found, try another' })
}
</script>

<style scoped>

</style>
