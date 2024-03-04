<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <div @click="scrollToTop()" v-if="showButton" style="box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2)"
      class="fixed cursor-pointer shadow-xl rounded-full bottom-5 right-5">
      <img src="@/assets/images/arrow.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/components'
import { RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showButton = ref(false)
onMounted(() => {
  window.addEventListener("scroll", changeButtonCondition);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", changeButtonCondition);
})

const changeButtonCondition = (): any => {
  showButton.value = window.scrollY > window.innerHeight;
}

const scrollToTop = (): any => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>