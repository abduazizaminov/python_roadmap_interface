<template>
  <div class="relative mb-10">
    <div ref="block" class="relative bg-white border-customGreen border-[3px] px-5 py-[22px] text-base leading-[23px] border-solid">
      <div class="text-customGreen font-medium text-[20px] mb-3">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </div>
    <div :style="{ height: blockHeight + 'px' }" class="w-full top-[16px] z-[-1] left-[10px] absolute bg-customGreen"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

const block = ref(null);
const blockHeight = ref(0) as Ref<number>;
onMounted(() => {
  if (block.value !== null) {
    blockHeight.value = block.value.clientHeight;
  }
})
</script>