<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-pink-500">
    <h1 class="mb-8 text-4xl font-bold text-white">Lequel de ces chats est le plus mignon ?</h1>
    <div class="flex justify-around w-full px-4">
      <BaseCard :cat-number="1" />
      <BaseCard :cat-number="2" />
    </div>
  </div>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue';
// import { ElButton } from 'element-plus'

// const voteForCat = (catId) => {
//   console.log(`Voté pour le chat ${catId}`);
// }
</script>

<style>
.el-card__footer {
  border: none;
}
</style>
