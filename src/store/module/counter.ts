import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 组合式
export const counterStore = defineStore('counter', ()=> {
    const count = ref(0);

    const double = computed(()=> {
        return count.value * 2;
    })

    function increment() {
        count.value++;
    }

    return { count, double, increment }
}, {
  // persist: true
  persist: {
    key: 'storekey',
    storage: window.sessionStorage
  }
})

// 选项式
// export const counterStore = defineStore('counter', {
//   persist: {
//     // 修改存储中使用的键名称，默认为当前 Store的 id
//     key: 'storekey',
//     // 修改为 sessionStorage，默认为 localStorage
//     storage: window.sessionStorage,
//     // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
//     paths: ['count']
//   },
//   state: () => {
//     return {
//       count: 0
//     }
//   },
//   getters: {
//     double: (state) => {
//       return state.count * 2
//     }
//   },
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })
