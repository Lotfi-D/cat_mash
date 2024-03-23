<template>
  <div class="flex justify-center min-h-screen bg-gradient-to-r from-blue-500 to-pink-500 p-4">
    <!-- Utilise grid-cols-4 pour 4 items par ligne et gap-4 pour l'espacement -->
    <div class="grid grid-cols-4 gap-10">
      <BaseCardScore 
        v-for="cat in listCats" 
        :key="cat.id" 
        :data="cat" 
        class="bg-white rounded-lg shadow overflow-hidden"
      />
    </div>
  </div>
</template>



<script setup>
import BaseCardScore from '@/components/BaseCardScore.vue';
import { useCatsStore } from '@/stores/cats'
import { storeToRefs } from 'pinia'

const store = useCatsStore()
const { listCats } = storeToRefs(store)
// const { incrementScore } = store
</script>
