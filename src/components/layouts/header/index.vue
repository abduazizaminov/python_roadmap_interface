<template>
  <div class="w-full select-none bg-[#ECEFF1]">
    <div class="lg:max-w-7xl w-full ml-auto mr-auto">
    <ul class=" flex justify-between py-[37px] lg:px-[64px] md:px-[32px] px-[24px]">
      <router-link to="/">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] mr-[18px]">Главная</li>
      </router-link>
      <router-link to="/roadmap">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] mx-[18px]">Python Roadmap</li>
      </router-link>
      <router-link to="/basics">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] mx-[18px]">Learn the Basics</li>
      </router-link>
      <router-link to="/algorithms">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] mx-[18px]">Datastructures and Algorithms</li>
      </router-link>
      <router-link to="/topic">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] mx-[18px]">Advanced Topic</li>
      </router-link>
      <router-link to="/framework">
        <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] ml-[18px]">Learn a Framework</li>
      </router-link>
    </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>