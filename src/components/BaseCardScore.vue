<template>
  <el-card style="width: 320px">
    <template #header>
      Yummy hamburger
      <ElProgress
        :percentage="getScoreInPercentage" 
        :color="colors"
        :width="60"
        type="circle"
      />
    </template>
    <div>
      <img :src="data.url" style="width:100%; height: 300px" />
    </div>
  </el-card>
</template>


<script setup>
import { defineProps, ref, computed } from 'vue'
import { ElCard, ElProgress } from 'element-plus'
import { useCatsStore } from '@/stores/cats'
import { storeToRefs } from 'pinia'

const store = useCatsStore()
const { totalScore } = storeToRefs(store)

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})

const colors = ref([
  { color: '#f56c6c', percentage: 50 }, //red under 20
  { color: '#e6a23c', percentage: 65 }, //orange under 65
  { color: '#f0e68c', percentage: 80 }, //yellow under 80
  { color: '#5cb87a', percentage: 100 }, //green under 100
])

const getScoreInPercentage = computed(() => {
  const percentage = (props.data.score / totalScore.value) * 100
  return percentage.toFixed(2);
}) 
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

.el-progress__text {
  font-size: 16px !important;
}
</style>

