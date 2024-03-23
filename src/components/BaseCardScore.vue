<template>
  <el-card style="width: 320px">
    <template #header>
      Yummy hamburger
      <ElProgress
        :percentage="10" 
        :color="colors"
        :width="60"
        type="circle"
      />
    </template>
    <div>
      <img :src="data.url" style="width:100%; height: 300px"/>
    </div>
  </el-card>
</template>


<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { ElCard, ElProgress } from 'element-plus'

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

const colors = ref([
  { color: '#f56c6c', percentage: 50 }, //red under 20
  { color: '#e6a23c', percentage: 65 }, //orange under 65
  { color: '#f0e68c', percentage: 80 }, //yellow under 80
  { color: '#5cb87a', percentage: 100 }, //green under 100
])

onMounted(() => {
  console.log(props)
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
</style>

