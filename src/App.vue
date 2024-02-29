<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Header } from '@/components'
</script>

<template>
  <div class="font-rubik">
    <Header></Header>
    <RouterView />
  </div>
</template>
