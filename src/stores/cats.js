import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCatsStore = defineStore('cats', () => {
  const cats = ref([])
  const scores = ref([])
  
  const listCats = computed(() => cats.value)

  const incrementScore = (cat) => {
    scores.value.push(cat)
  }

  const addAllCats = (listCats) => {
    cats.value = listCats
  }

  return { 
    cats, 
    listCats,
    incrementScore,
    addAllCats,
  }
}, { persist: true })
