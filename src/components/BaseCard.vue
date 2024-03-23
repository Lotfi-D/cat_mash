<template>
  <el-card class="cat-container bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" style="max-width: 480px">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
    <template #footer>
      <el-button class="w-[100%]" :class="classCat" @click="voteForCat(catNumber)">
        Votez
      </el-button>
    </template>
  </el-card>
</template>

<script setup>
import { defineProps, onMounted, computed } from 'vue'
import { ElCard, ElButton } from 'element-plus'

const props = defineProps({
  catNumber: {
    default: 1,
    type: Number,
  }
})

onMounted(() => {
  console.log(props)
})

const classCat = computed(() => props.catNumber === 1 ? 'first-cat' : 'second-cat')

const voteForCat = (catId) => {
  console.log(`Voté pour le chat ${catId}`);
}
</script>

<style>
.el-card__footer {
  border: none !important;
  width: 100%;
  display: flex;
  justify-content: center;
}

.first-cat {
  background-color: #3B82F6 !important;
  color: white !important;
}

.second-cat {
  background-color: #ec4899 !important;
  color: white !important;
}
</style>

