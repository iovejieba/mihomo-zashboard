<template>
  <DialogWrapper
    v-model="ruleDetailModalShow"
    :no-padding="true"
    :box-class="`max-w-168`"
  >
    <div class="flex h-full max-h-[69dvh] flex-col pt-4 md:max-h-[89dvh]">
      <ProxyGroup
        v-if="proxyName"
        class="transparent-collapse"
        :name="proxyName"
      />
    </div>
  </DialogWrapper>
</template>

<script setup lang="ts">
import DialogWrapper from '@/components/common/DialogWrapper.vue'
import { useRule } from '@/composables/rule'
import { collapseGroupMap } from '@/store/settings'
import { ref, watch } from 'vue'
import ProxyGroup from '../proxies/ProxyGroup.vue'

const { proxyName, ruleDetailModalShow } = useRule()
const collapseCache = ref(false)

watch(ruleDetailModalShow, (value) => {
  if (!proxyName.value) return

  if (value) {
    collapseCache.value = collapseGroupMap.value[proxyName.value]
    collapseGroupMap.value[proxyName.value] = true
  } else {
    collapseGroupMap.value[proxyName.value] = collapseCache.value
  }
})
</script>
