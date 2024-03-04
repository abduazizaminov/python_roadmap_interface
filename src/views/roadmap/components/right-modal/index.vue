<template>
  <div v-if="modalCondition">
    <div class="fixed z-50 right-0 h-full top-0  bg-white p-5">
      asdasd
    </div>
    <div @click="closeModal()" class="fixed z-10 top-0 w-full h-full bg-black bg-opacity-30"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalCondition = ref(true)

const closeModal = ():any => {
  modalCondition.value = false
}

const openModal = ():any => {
  modalCondition.value = true
}
</script>