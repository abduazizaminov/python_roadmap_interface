<template>
  <div class="w-full select-none bg-[#ECEFF1]">
    <div class="lg:max-w-7xl w-full ml-auto mr-auto">
      <div class="py-[27px] lg:px-[64px] md:px-[32px] px-6">
        <div class="flex justify-start items-center w-full">
          <div class="flex w-full">
            <img src="@/assets/images/logo.png" class="mr-6 w-[90px] h-[72px]" alt="" srcset="">
            <p>
              Донишкадаи политехникии <br>
              Донишгоҳи техникии Тоҷикистон <br>
              ба номи академик М.С.Осимӣ
              дар шаҳри Хуҷанд
            </p>
          </div>
          <div class="w-full">
            <p class="flex justify-end">
              Рисолаҳои хатми соли таҳсили 2023 - 2024
            </p>
            <div class="flex justify-end items-center mt-2">
              <img class="w-[70px] mr-5" src="../../../assets/images/python-5.svg" alt="">
              <p class="ml-2">
                Раҳнамои рақамӣ <br>
                “Python Programmer Roadmap”
              </p>
            </div>
          </div>
        </div>
        <ul class="flex border-t-2 justify-around mt-3 pt-3">
          <router-link to="/">
            <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] ">Асоси</li>
          </router-link>
          <router-link to="/roadmap-info">
            <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] ">Харитаи роҳ</li>
          </router-link>
          <router-link to="/developer">
            <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] ">Python - таҳиягар</li>
          </router-link>
          <router-link to="/roadmap">
            <li class="cursor-pointer duration-200 hover:text-customGreen font-medium leading-[155%] ">Python Programmer Roadmap</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>