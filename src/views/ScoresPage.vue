<template>
  <div class="flex justify-center min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 p-4">
    <!-- Utilise grid-cols-4 pour 4 items par ligne et gap-4 pour l'espacement -->
    <div class="grid grid-cols-4 gap-10">
      <BaseCardScore 
        v-for="cat in listCatsSorted" 
        :key="cat.id" 
        :data="cat" 
        class="bg-white rounded-lg shadow overflow-hidden"
      />
    </div>
  </div>
</template>



<script setup>
import { computed } from 'vue'
import BaseCardScore from '@/components/BaseCardScore.vue';
import { useCatsStore } from '@/stores/cats'
import { storeToRefs } from 'pinia'

const store = useCatsStore()
const { listCats } = storeToRefs(store)

const listCatsSorted = computed(() => {
  return [...listCats.value].sort((a, b) => {
    if (a.score < b.score) return 1
    if (a.score > b.score) return -1
    return 0
  })
})
</script>
