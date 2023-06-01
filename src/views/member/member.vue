<template>
  <div>
    <el-button type="primary" size="default">hello</el-button>
    <span @click="add">hello</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '@/store'
import { getUserInfo } from '@/api/member/member'

const { counter } = useStore()

// 不能直接解构赋值，否则会失去响应式，可以使用storeToRefs；又或者直接不用解构赋值。
const { count, double } = storeToRefs(counter)

function add() {
  counter.increment()

  console.log(count.value, double.value, 'now')

  ElMessage('12312')

  getUserInfo().then((res) => {
    console.log(res)
  })
}
</script>

<style scoped lang="scss">
span {
  color: red;
}
</style>
