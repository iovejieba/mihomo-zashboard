import { nextTick, ref } from 'vue'

const proxyName = ref<string | null>(null)
const ruleDetailModalShow = ref(false)

export const useRule = () => {
  const handlerInfo = async (name: string) => {
    proxyName.value = null
    await nextTick()
    proxyName.value = name
    ruleDetailModalShow.value = proxyName.value.length > 0
  }

  return {
    proxyName,
    ruleDetailModalShow,
    handlerInfo,
  }
}
