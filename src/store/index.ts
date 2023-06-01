import { counterStore } from './module/counter'

export default function useStore() {
  return {
    counter: counterStore()
  }
}
