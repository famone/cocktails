<template>
  <div class="grid grid-cols-3 gap-4 bg-gray-100 rounded-xl p-8">
    <div class="col-span-3 md:col-span-1 sm:order-2">
      <DrinkImage
        :image="item.strDrinkThumb"
        :title="item.strDrink"
      />
    </div>
    <div class="col-span-3 md:col-span-2 sm:order-1">
      <h2 class="text-2xl font-semibold mb-3">
        {{ item.strDrink }}
      </h2>

      <div class="flex gap-2 flex-wrap mb-4">
        <div class="text-orange-500 text-xs p-1 bg-orange-200 rounded-md font-semibold ">
          {{ item.strCategory }}
        </div>
        <div class="text-blue-500 text-xs p-1 bg-blue-200 rounded-md font-semibold ">
          {{ item.strAlcoholic }}
        </div>
        <div class="text-teal-500 text-xs p-1 bg-teal-100 rounded-md font-semibold ">
          {{ item.strGlass }}
        </div>
      </div>

      <p class="text-xs text-gray-400 mb-1 uppercase tracking-widest">
        Instructions:
      </p>
      <p class="text-sm mb-4">
        {{ item.strInstructions }}
      </p>
    </div>
    <div class="col-span-3 order-3">
      <div>
        <p class="text-xs text-gray-400 mb-1 uppercase tracking-widest">
          List of ingredients:
        </p>
        <DrinkIngredients :ingredients="ingredients" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DrinkItem, IngredientsType } from '~/src/types/drinks'

type Props = {
  item: DrinkItem
}
const { item } = defineProps<Props>()

const findIngrByKey = (str: string, obj: DrinkItem): string[] => {
  const resultArr: string[] = []

  Object.keys(obj).forEach((key: string) => {
    if (key.startsWith(str)) {
      const value = obj[key as keyof DrinkItem]
      if (value) {
        resultArr.push(value)
      }
    }
  })

  return resultArr
}

const getIngredients = (): IngredientsType[] => {
  const strMeasureArr = findIngrByKey('strMeasure', item)
  const strIngredientArr = findIngrByKey('strIngredient', item)

  return strIngredientArr.map((ingredient, index) => ({
    ingredient,
    measure: strMeasureArr[index] || '',
  }))
}

const ingredients = computed(() => getIngredients())
</script>

<style scoped>

</style>
