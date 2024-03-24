import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCatsStore = defineStore('cats', () => {
  const cats = ref([])
  const scores = ref([])
  
  const listCats = computed(() => {
    const scoresId = scores.value.map((score) => score.id)

    const catsWithScores = cats.value.map((cat) => {
      let score = 0
      if (scoresId.includes(cat.id)) {
        const index = scores.value.findIndex(score => score.id === cat.id)
        score = scores.value[index].score
      }
      return {
        id: cat.id,
        url: cat.url,
        score,
      }
    })

    return catsWithScores
  })

  const incrementScore = (cat) => {
    const scoresId = scores.value.map((score) => score.id)

    if (scoresId.includes(cat.id)) {
      const index = scores.value.findIndex(score => score.id === cat.id)
      scores.value[index].score++
    } else {
      scores.value.push({
        id: cat.id,
        score: 1,
      })
    }
  }

  const addAllCats = (listCats) => {
    cats.value = listCats
  }

  return { 
    cats, 
    scores,
    listCats,
    incrementScore,
    addAllCats,
  }
}, { persist: true })
