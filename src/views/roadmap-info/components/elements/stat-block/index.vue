<template>
  <div class="h-full flex flex-col justify-between">
    <div>
      <div class="mb-1">
        <div class="rounded-full flex items-center text-xl font-medium ml-[10px] bg-customGreen bg-opacity-10 w-[100px] h-[100px] text-customGreen">
          <slot name="head"></slot>
        </div>
        <div class="bg-customGreen w-[120px] mt-[-10px] rounded-[20px] h-1"></div>
      </div>
      <div class="text-lg leading-[150%] font-ibm">
        <slot></slot>
      </div>
    </div>
    <div class="flex mt-10 justify-end font-ibm text-lg italic leading-[150%] opacity-50">
      <slot name="source"></slot>
    </div>
  </div>
</template>