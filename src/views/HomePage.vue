<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-pink-500">
    <h1 class="mb-8 text-4xl font-bold text-white">Lequel de ces chats est le plus mignon ?</h1>
    <div class="flex justify-around w-full px-4">
      <BaseCard v-loading="cardIsLoading" :cat-number="1" :data="firstCatData" />
      <BaseCard v-loading="cardIsLoading" :cat-number="2" :data="secondCatData" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import catServices from '../services/catServices.js'
import BaseCard from '@/components/BaseCard.vue';
import { useCatsStore } from '@/stores/cats'
import { storeToRefs } from 'pinia'

const store = useCatsStore()
const { listCats } = storeToRefs(store)
const { addAllCats } = store //incrementScore,

const firstCatData = ref({})
const secondCatData = ref({})
const pageIsLoading = ref(false)
const cardIsLoading = ref(false)

onMounted(async () => {
  await getAllCats()
  getCatsCardData()
})

const getAllCats = async () => {
  pageIsLoading.value = true
  cardIsLoading.value = true
  try {
    const { data } = await catServices.fetchAllCats()
    addAllCats(data.images)
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      pageIsLoading.value = false
    }, 300)
  }
}

const getRandomNumber = () => Math.floor(Math.random() * listCats.value.length);

const getFirstCatData = () => {
  const randomNumber = getRandomNumber()
  firstCatData.value = listCats.value[randomNumber]
}

const getSecondCatData = () => {
  const randomNumber = getRandomNumber()
  secondCatData.value = listCats.value[randomNumber]
  if (secondCatData.value.id === firstCatData.value.id) {
    getSecondCatData()
  }
}

const getCatsCardData = async () => {
  getFirstCatData()
  getSecondCatData()
  setTimeout(() => {
    cardIsLoading.value = false
  }, 800)
}
</script>

<style>
.el-card__footer {
  border: none;
}
</style>
