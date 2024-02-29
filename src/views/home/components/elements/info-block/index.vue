<script setup lang="ts">

</script>

<template>
  <div class="text-[20px] h-full text-black py-[34px] px-[30px] border-[3px] border-customGreen rounded-md">
    <div class="font-medium leading-[155%]">
      <slot name="header"></slot>
    </div>
    <div class="leading-[130%] mt-[21px]">
      <slot></slot>
    </div>
  </div>
</template>