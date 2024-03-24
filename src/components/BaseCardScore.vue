<template>
  <el-card style="width: 320px">
    <template #header>
      <div class="flex justify-center">
        <span class="font-bold mr-1">Score:</span> {{ data.score }}
      </div>
    </template>
    <div>
      <img :src="data.url" class="w-[100%] h-[300px]" />
    </div>
  </el-card>
</template>


<script setup>
import { defineProps } from 'vue'
import { ElCard } from 'element-plus'

defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
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

