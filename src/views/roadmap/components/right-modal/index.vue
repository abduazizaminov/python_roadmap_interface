<template>
  <div v-if="modalCondition">
    <div class="fixed max-w-[500px] z-50 right-0 h-full top-0 bg-white p-5">
      <div class="cursor-pointer mr-[-10px] mb-[10px] flex justify-end">
        <div @click="closeModal()" class="cursor-pointer p-1 rounded-md hover:bg-[#121827] hover:bg-opacity-10">
          <img src="@/assets/images/cancel.svg" alt="">
        </div>
      </div>
      asdsdfdf asdfsadf asdfasdf asdfasdf 
    </div>
    <div @click="closeModal()" class="fixed z-10 top-0 w-full h-full bg-black bg-opacity-50"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const modalCondition = ref<boolean>(true)

const closeModal = ():void => {
  modalCondition.value = false
}

const openModal = ():void => {
  modalCondition.value = true
}

defineExpose({
  openModal,
  closeModal
});
</script>