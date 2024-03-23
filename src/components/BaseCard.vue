<template>
  <el-card class="cat-container bg-white p-6 rounded-lg shadow-lg flex flex-col items-center" style="width: 480px;">
    <img :src="data.url"
      style="width: 400px; height: 400px; 
      object-fit: cover;"
    >
    <!-- mettre texte en white et bg  -->
    <template #footer>
      <el-button 
        class="w-[100%]"
        :class="classCat"
        @click="voteForCat(data)"
      >
        Votez
      </el-button>
    </template>
  </el-card>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { ElCard, ElButton } from 'element-plus'
import { useCatsStore } from '@/stores/cats'

const store = useCatsStore()
const { incrementScore } = store

const props = defineProps({
  catNumber: {
    type: Number,
    default: 1,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
})

const emits = defineEmits(['voted'])

const classCat = computed(() => props.catNumber === 1 ? 'first-cat' : 'second-cat')

const voteForCat = (cat) => {
  incrementScore(cat)
  emits('voted')
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

