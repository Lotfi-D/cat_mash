<template>
  <div class="flex flex-col">
    <div class="justify-center flex items-center mb-5">
      <span>Trier par:</span>
      <el-select
        v-model="selectValue"
        placeholder="Select"
        size="large"
        class="ml-5"
        style="width: 240px"
      >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
      </el-select>
    </div>
    <div class="flex justify-center p-4">
      <div class="grid grid-cols-4 gap-10">
        <BaseCardScore 
          v-for="cat in listCatsSorted" 
          :key="cat.id" 
          :data="cat" 
          class="bg-white rounded-lg shadow overflow-hidden"
        />
      </div>
    </div>
  </div>  
</template>

<script setup>
import { computed, ref } from 'vue'
import BaseCardScore from '@/components/BaseCardScore.vue';
import { useCatsStore } from '@/stores/cats'
import { storeToRefs } from 'pinia'
import { ElSelect, ElOption } from 'element-plus'
import { sortByScores } from '@/helpers';

const store = useCatsStore()
const { listCats } = storeToRefs(store)

const selectValue = ref('')

const options = ref([
  {
    label: 'Du mieux noté au moins bien noté',
    value: 'sortByDescScores',
  },
  {
    label: 'Du moins bien noté au mieux noté',
    value: 'sortByAscScores',
  },
])

const listCatsSorted = computed(() => {
  if (selectValue.value === 'sortByDescScores') {
    return sortByScores([...listCats.value] ,'desc')
  } else if (selectValue.value === 'sortByAscScores') {
    return sortByScores([...listCats.value] ,'asc')
  }
  
  return listCats.value
})
</script>
